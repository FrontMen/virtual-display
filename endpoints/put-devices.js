const toonService = require("../services/Toon");

function updateDevices(req,res){
    let toon = toonService.get(0);

    const devices = req.body;

    devices.forEach(device => {
        const modifier = toon.modifiers.find(m => m.uuid === device.uuid);

        if (modifier) {
            modifier.enabled = device.currentState;
        }
    });

    res.send(200, devices);
}


module.exports = {
    url: "/:agreementId/devices/",
    put: updateDevices
};