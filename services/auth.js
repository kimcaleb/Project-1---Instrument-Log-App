const   
    User = require("../models/user"),
    passport = require("passport"),
    LocalStrategy = require("passport-local").Strategy;



//creates two ids, stores one in the session and the other in a cookie that is sent back to the client's browser. The done function is like next, so we say do this, then move on to the next step. It's abstracting the creation of the key for us. We just invoke this method providing the userId.    
passport.serializeUser((user,done) =>{
    done(null,user.id);
});

 // This method allows us to deserilize the sid so that we covert it back to a regular user object 
passport.deserializeUser((id,done) =>{
    User.findById(id, (err,user) =>{
        done(err,user);
    });
});
