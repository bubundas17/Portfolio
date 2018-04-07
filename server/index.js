// Imports
const express = require('express');
const {Nuxt, Builder} = require('nuxt');
const mongoose = require("mongoose");
const passport = require("passport");
const serverConfig = require("../config");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local");

// Schema
const userDB = require("./models/user");

// Core Func
const auth = require("./core/auth");

// Init App
const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;
mongoose.connect(serverConfig.database.url + serverConfig.database.db);


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}));
app.use(bodyParser.text({type: 'text/html'}));
app.use(require('express-session')(serverConfig.session));

// Passport Configurations
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  userDB.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await userDB.findOne({username: username});
      if (auth.checkPassword(password, user.password, user.salt)) {
        return done(null, user);
      }
    } catch (e) {
      done("Something Went Wrong", null);
    }
    done("Invalid Username Or Password", null);
  }
));

// Routes
const apiRoutes = require("./routes");

app.set('port', port);
app.use(apiRoutes);

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}

start()
