const   
    mongoose = require("mongoose"),
    bcrypt = require("bcrypt-nodejs"),
    userSchema = new mongoose.Schema({
        email:String,
        password:String
    }, {timestamps:true});

  //The pre method is invoked before every single save that is done for particular user object. So, if we're editing a user and saving the changes, this will always be invoked. This method is going to handle the actual encryption of the password. The "next" argument is a callback function basically saying move on to the next step, which is the actual saving of the object. So, user provides password in plain text, then we encrpt the password and store it before moving on to the next step.
userSchema.pre("save", function(next) {
    const user = this;
    //if the password field is not modified, then we don't need to encpt it since it was already enctypted at creation. 
    if (!user.isModified("password")) return next();
    bcrypt.genSalt(8,(err,salt) => {
        if (err) return next(err);
        bcrypt.hash(user.password,salt,null,(err,hash) =>{
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

  //userSchema is an object, within that object is another object called methods, and then we add a new field to it.
  //The way this works is when we do something like User.findOne(), we can then perform the validPassword method on the user object that was found
userSchema.methods.isValidPassword = function(password) {
    //compares password passed as argument to password created by the user in the user object.
    return bcrypt.compareSync(password,this.password);
}

const User = mongoose.model("User", userSchema);
module.exports = User;