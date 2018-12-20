const   
    express = require("express"),
    Device = require("../controllers/devices"),
    Log = require("../controllers/logs"),
    deviceRouter = express.Router();



// Device Endpoints
deviceRouter.get("/", Device.index); // show all devices
deviceRouter.post("/", Device.create); // create new device

// Log Endpoints
deviceRouter.get("/:id", Log.index); // Show a specific device + logs. 
deviceRouter.post("/:id", Log.create); // Create new log
 
module.exports = deviceRouter;