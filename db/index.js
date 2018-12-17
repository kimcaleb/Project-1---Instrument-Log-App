const   
    mongoose = require("mongoose");

mongoose.connect(process.env.MONGOD_URI, err =>{
    console.log(err || `Successfully connected to database`);
});

module.exports = mongoose;