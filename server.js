 const 
    express = require("express"),
    app = express(),
    PORT = process.env.PORT || 4000,
    ejsLayouts = require("express-ejs-layouts"),
    logger = require("morgan");


// Middleware setup
app.use(logger("dev")); // logs requests to terminal


// App Configuration
app.set("view engine", "ejs"); // Tells app we are not using standard html but ejs
app.use(ejsLayouts); // Allows us to do partials. 

// Routes



// Listening on
app.listen(PORT, err => {
    console.log(err || `Listening on Port ${PORT}`);
});
    




    