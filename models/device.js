const 
    mongoose = require("mongoose"),
    logSchema = new mongoose.Schema({
        description: String,
        time: String,
        humidity: String,
        initials: String,
        comments: String,
        fbln: String,
        fbdoe: String,
        crdln: String,
        crddoe: String,
        tigeln: String,
        tigedoe: String,
        conjugateln: String,
        conjugatedoe: String,
        subaln: String,
        subadoe: String,
        subbln: String,
        subbdoe: String,
        wb10xln: String,
        wb10xdoe: String,
        wb1xln: String,
        wb1xdoe: String,
        rdln: String,
        rddoe: String,
        cal007ln: String,
        cal007doe: String,
        cal035ln: String,
        cal035doe: String,
        cal070ln: String,
        cal070doe: String,
        cal35ln: String,
        cal35doe: String,
        cal175ln: String,
        cal175doe: String,
        cal100ln: String,
        cal100doe: String,
    },{timestamps:true}),
    deviceSchema = new mongoose.Schema({
        name: String,
        logs: [logSchema]
    },{timestamps:true});


const Device = mongoose.model("Device",deviceSchema);
module.exports = Device;