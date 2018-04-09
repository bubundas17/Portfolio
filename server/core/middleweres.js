module.exports = {
  isLoggedIn(req, res, next){
    if(! req.user){
      return res.status(401).json({error: true, message: "Please Login/Sign Up First!"})
    }
    next()
  },
  isAdmin(req, res, next){
    if (req.user && req.user.isAdmin === true){
      return next()
    }
    return res.status(403).json({error: true, message: "You don't have permission to do so."});
  }
};
