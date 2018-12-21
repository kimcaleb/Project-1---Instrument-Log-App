const 
    mongoose = require("mongoose"),
    logSchema = new mongoose.Schema({
        date: {type:String, required:true},
        description: {type:String, required:true},
        time: {type:String, required:true},
        humidity: {type:String, required:true},
        initials: {type:String, required:true},
        comments: {type:String, required:true},
        fbln: {type:String, required:true},
        fbdoe: {type:String, required:true},
        crdln: {type:String, required:true},
        crddoe: {type:String, required:true},
        tigeln: {type:String, required:true},
        tigedoe: {type:String, required:true},
        conjugateln: {type:String, required:true},
        conjugatedoe: {type:String, required:true},
        subaln: {type:String, required:true},
        subadoe: {type:String, required:true},
        subbln: {type:String, required:true},
        subbdoe: {type:String, required:true},
        wb10xln: {type:String, required:true},
        wb10xdoe: {type:String, required:true},
        wb1xln: {type:String, required:true},
        wb1xdoe: {type:String, required:true},
        rdln: {type:String, required:true},
        rddoe: {type:String, required:true},
        cal007ln: {type:String, required:true},
        cal007doe: {type:String, required:true},
        cal035ln: {type:String, required:true},
        cal035doe: {type:String, required:true},
        cal070ln: {type:String, required:true},
        cal070doe: {type:String, required:true},
        cal35ln: {type:String, required:true},
        cal35doe: {type:String, required:true},
        cal175ln: {type:String, required:true},
        cal175doe: {type:String, required:true},
        cal100ln: {type:String, required:true},
        cal100doe: {type:String, required:true}
    },{timestamps:true}),
    deviceSchema = new mongoose.Schema({
        name: {type:String, required:true},
        logs: [logSchema]
    },{timestamps:true});


const Device = mongoose.model("Device",deviceSchema);
module.exports = Device;