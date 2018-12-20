const 
    Device = require("../models/device");

module.exports = {
    index: (req,res) =>{
        Device.findById(req.params.device_id, (err,device) =>{
            if (err) res.json({success:false,err});
            else {
                res.json({success:true,device: device.logs});
            }
        });
    },
    create: (req,res) => {
        Device.findById(req.params.device_id, (err,device) =>{
            if (err) res.json({success: false, err});
            else {
                let newLog = req.body;
                device.logs.push(newLog);
                console.log(device.logs[0].createdAt.$date);
                device.save( err =>{
                    if (err) res.json({success:false, err});
                    else {
                        res.json({success:true, device});
                    }
                });
            }
        });
    }
}