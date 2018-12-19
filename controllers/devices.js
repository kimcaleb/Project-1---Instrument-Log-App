const   
    Device = require("../models/device");  

module.exports = {
    index: (req,res) => {
        Device.find({}, (err,devices) =>{
            if (err) res.json({sucess:false,err});
            else {
                res.json({success:true, devices});
            }
        });
    },
    create: (req,res) =>{
        Device.create(req.body, (err,newDevice) =>{
            if (err) res.json({success:false, err});
            else {
                res.json({success:true,newDevice});
            }
        });
    }
}