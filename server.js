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
    cookieParser = require("cookie-parser");


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



// Routes
app.get("/", (req,res) =>{
    res.render("index");
});
app.use("/",userRouter);




// Listening on
app.listen(PORT, err => {
    console.log(err || `Listening on Port ${PORT}`);
});
    




    