const
    express = require("express"),
    userRouter = new express.Router(),
    passport = require("../services/auth");

// render login view
userRouter.get("/login", (req,res) =>{
    res.render("index");
});


//whenever we call the authenticate method we pass in the local strategy and an object. Two things can happen, either the user succefully logged in or didnt. So we redirect them to the appropiate pages depending on the success or failure. 
userRouter.post("/login", passport.authenticate("local-login",{
    successRedirect: "/profile",
    failureRedirect: "/login"
}));

// render signup view
userRouter.get('/signup', (req, res) => {
    res.render('signup');
  });
  
userRouter.post("/signup", passport.authenticate("local-signup", {
    successRedirect: "/profile",
    failureRedirect: "/signup"
  }));

  
  userRouter.get("/profile",isLoggedIn,(req,res) => {
    res.render("profile");
  });

  function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()) return next();
    res.redirect("/login");
  }

  module.exports = userRouter;