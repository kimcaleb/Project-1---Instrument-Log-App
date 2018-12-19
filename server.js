 require("dotenv").config();

 const 
    express = require("express"),
    app = express(),
    PORT = process.env.PORT || 3000,
    ejsLayouts = require("express-ejs-layouts"),
    logger = require("morgan"),
    session = require('express-session'),
    MongoDBStore = require('connect-mongodb-session')(session), //Higher order function
    passport = require("./services/auth")
    userRouter = require("./routes/users"),
    cookieParser = require("cookie-parser"),
    methodOverride = require("method-override"),
    flash = require("connect-flash");


// Database
require("./db/index");
// will store session information as a 'sessions' collection in Mongo
const store = new MongoDBStore({
    uri: process.env.MONGOD_URI,
    collection: 'sessions'
  });
    
// Middleware setup
app.use(logger("dev")); // log incoming requests to terminal
app.use(cookieParser()); // interpret cookies that are attached to requests
app.use(express.urlencoded({extended: true})); // interpret standard form data in requests
app.use(express.static(__dirname + "/public")); //allows us to attach static css files to ejs files
app.use(methodOverride("_method")); // will look for query command
app.use(flash());

// App Configuration
app.set("view engine", "ejs"); // Tells app we are not using standard html but ejs
app.use(ejsLayouts); // Allows us to do partials. 

app.use(session({
	secret:"helloooo", // basically gives each cookie a salt. 
	cookie: {maxAge: 600000000},
	resave: true,
	saveUninitialized: false,
	store // specifies that we want to store all our user sessions in the mongodb we established for the sessions collections above. 
}));

app.use(passport.initialize()); 
app.use(passport.session());

//locals is a property that is available on every view that we render using ejs. It can have access to this locals object if we so define it, which means that we can assign key value pairs on that local object that are globally available in every single view which basically enables us to make our code dryer. 
app.use((req,res,next) => {
	app.locals.currentUser = req.user;
	app.locals.loggedIn = req.user;
	next();
});


// Routes
app.get("/", (req,res) =>{
    res.render("index");
});
app.use("/",userRouter);

const devicesRouter = require("./routes/devices");
app.use('/devices', isLoggedIn ,devicesRouter)



function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()) return next();
    res.redirect("/login");
  }

// Listening on
app.listen(PORT, err => {
    console.log(err || `Listening on Port ${PORT}`);
});
    




    