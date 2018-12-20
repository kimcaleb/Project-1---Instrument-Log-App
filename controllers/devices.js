const   
    Device = require("../models/device");  

module.exports = {
    index: (req,res) => {
        Device.find({}, (err,devices) =>{
            if (err) console.log(err);
            else {
               return devices;
            }
        });
    },
    create: (req,res) =>{
        Device.create(req.body, (err,newDevice) =>{
            if (err) console.log(err);
            else {
                res.render("profile", {newDevice});
            }
        });
    }
}