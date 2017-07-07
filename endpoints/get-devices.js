const toonService = require("../services/Toon");

function getDevices(req, res) {
    let toon = toonService.get(0);

    const devices = toon.electricityModifiers.map(({name, uuid, currentValue, enabled}) => ({
        name,
        uuid,
        usageCapable: true,
        currentUsage: currentValue,
        currentState: enabled ? 1 : 0
    }));

    res.send(200, devices);
}


module.exports = {
    url: "/:agreementId/devices/",
    get: getDevices
};