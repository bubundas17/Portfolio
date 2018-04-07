const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const sessionStore = new MongoStore({mongooseConnection: mongoose.connection});

module.exports = {
  database: {
    url: "mongodb://localhost/",
    db: "bubun"
  },
  session: {
    secret: 'keyboard cat',
    store: sessionStore,
    resave: true,
    saveUninitialized: true
  },
}
