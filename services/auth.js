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


// LOCAL SIGNUP ACTION
// The usernameField and passwordField will map to the specified user model fields.
passport.use("local-signup", new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, (req,email,password,done) => {
    User.findOne({email}, (err,user) => {
        if (err) return done(err);
        if (user) return done(null,false,req.flash("signupMessage", "That email is already taken")); //if the user with the username exists, skip
        // Else create a new user
        User.create(req.body,(err,newUser) =>{
            if (err) return console.log(err);
            return done(null, newUser, null);
            });
        });
    })
);

// LOCAL LOGIN ACTION
passport.use("local-login", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    }, (req,email,password,done) =>{
        User.findOne({email},(err,user) => {
            console.log("HITTTT")
            if (err) return done(err);
            if (!user || !user.isValidPassword(password)) return done(null,false, req.flash("signupMessage", "Incorrect Email and/or Password"));
            return done(null,user);
        });
    })
);
module.exports = passport;