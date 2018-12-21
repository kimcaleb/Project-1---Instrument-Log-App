const   
    Device = require("../models/device");

module.exports = {
    index: (req,res) => {
        Device.find({}, (err,devices) => {
            if (err) console.log(err);
            res.render("profile",{devices});         
        });
    },

    show: (req,res) => {
        Device.findById(req.params.id, (err,device)=>{
            if (err) console.log(err);
            console.log(device);
            Device.find({}, (err,devices) => {
                if (err) console.log(err);
                res.render("profile", {devices, device});         
            });
        });
    },

    create: (req,res) =>{
        Device.create(req.body, (err,newDevice) =>{
            if (err) console.log(err);
            else {
                res.redirect("instruments");
            }
        });
    }
}