const express = require("express");
const passport = require("passport")
const router = express.Router();
const userDB = require("../../models/user");
const auth = require("../../core/auth");

router.post("/login", (req, res, next) => {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return res.status(401).json({error: true, message: err});
    }
    if (!user) {
      return res.status(401).json({error: true, message: "Invalid Username or Password"});
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      const {name, email, username, isAdmin} = req.user;
      return res.json({message: "Logged You In!", user: {name, username, email, isAdmin}});
    });
  })(req, res, next);
});

router.post("/signup", async (req, res) => {
  let {name, username, email, password} = req.body;
  const salt = auth.createSalt();
  const pass = auth.hashPassword(password, salt);
  try {
    let user = await userDB.create({
      name, username: username.toLowerCase(), email, password: pass, salt
    });
    res.json(user)
  } catch (err) {
    console.log(err);
    res.status(500).json({error: true, message: "Something Went Wrong."})
  }
});

router.get("/logout", async (req, res) => {
  req.logout();
  res.json({
    message: "Logged You Out! Comeback Soon."
  })
});

router.post("/test", (req, res) => {
  res.json({
    data: {
      message: "Connected!"
    }
  })
});

module.exports = router;
