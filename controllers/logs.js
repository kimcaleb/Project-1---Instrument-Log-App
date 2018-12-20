const 
    Device = require("../models/device");

module.exports = {
    index: (req,res) =>{
        Device.findById(req.params.device_id, (err,device) =>{
            if (err) res.json({success:false, err});
            else {
                res.json({success:true, logs: device.logs})
            }
        });
    },
    
}