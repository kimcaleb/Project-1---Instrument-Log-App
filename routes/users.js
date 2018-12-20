const
    express = require("express"),
    userRouter = new express.Router(),
    passport = require("../services/auth"),
    devices = require("../controllers/devices"); 

// render login view
userRouter.get("/login", (req,res) =>{
    res.render("index", {message: req.flash("signupMessage")});
});


//whenever we call the authenticate method we pass in the local strategy and an object. Two things can happen, either the user succefully logged in or didnt. So we redirect them to the appropiate pages depending on the success or failure. 
userRouter.post("/login", passport.authenticate("local-login",{
    successRedirect: "/profile",
    failureRedirect: "/login"
}));

// render signup view
userRouter.get('/signup', (req, res) => {
    res.render("signup", { message: req.flash("signupMessage")});
  });
  
userRouter.post("/signup", passport.authenticate("local-signup", {
    successRedirect: "/profile",
    failureRedirect: "/signup"
  })); 

//destroy the session and redirect the user back to the homepage. 
userRouter.get("/logout", (req,res) =>{
    req.logout();
    res.redirect("/login");
  });

  userRouter.get("/profile",isLoggedIn,(req,res) => {
    // send devices whenever we are logged into profile. 
    res.render("profile",{devices:devices.index()});
  });

  //User Update
  userRouter.get("/profile/edit",isLoggedIn, (req,res) =>{
    res.render("editprofile");
  });

  userRouter.patch("/profile", isLoggedIn, (req,res) => {
    //check to see if the request body has a truthy password key (meaning the user is tryingg to modify password). Essentially, if there is nothing written in the password field, then we want to delete the password field in the req.body object since we don't want a empty password to be saved over the current password. 
    if (!req.body.password) delete req.body.password;
    // The assign method will take an object as the first argument and take another object that we want to merge it with. req.user now holds the new information
    Object.assign(req.user,req.body);
    req.user.save((err,updatedUser) =>{
      if (err) return console.log(err);
      res.redirect("/profile");
    });
  });

  //User Delete
  userRouter.delete("/profile", isLoggedIn, (req,res) =>{
    req.user.delete((err,deletedUser) =>{
      if (err) return console.log(err);
      res.redirect("/login");
    });
  });
  
  

  function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()) return next();
    res.redirect("/login");
  }

  module.exports = userRouter;