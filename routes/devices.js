const   
    express = require("express"),
    Device = require("../controllers/devices"),
    Log = require("../controllers/logs"),
    deviceRouter = express.Router();



// Device Endpoints
deviceRouter.get("/", Device.index); // show all devices
deviceRouter.post("/", Device.create); // create new device
deviceRouter.get("/:id", Device.show); //Obtain specific device.

// Log Endpoints
deviceRouter.get("/:id/logs", Log.index); // Show a specific device + logs. 
deviceRouter.post("/:id/logs", Log.create); // Create new log
 
module.exports = deviceRouter;