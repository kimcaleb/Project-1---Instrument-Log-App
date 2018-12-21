const 
    Device = require("../models/device");

module.exports = {
    index: (req,res) =>{
        Device.findById(req.params.id, (err,device) =>{
            if (err) res.json({success:false,err});
            else {
                res.json({success:true,device});
            }
        });
    },
    create: (req,res) => {
        Device.findById(req.params.id, (err,device) =>{
            if (err) res.json({success: false, err});
            else {
                device.logs.push(req.body);
                device.save( err =>{
                    if (err) console.log(err);
                    Device.find({}, (err,devices) => {
                        if (err) console.log(err);
                        res.render("profile2", {devices, device});         
                    });
                });
            }
        });
    }
}