const toonService = require("../services/Toon");

function getDevices(req,res){
    let toon = toonService.get(req.params.agreementId);

    const devices = toon.electricityModifiers.map(({name, uuid}) => ({name, uuid, usageCapable: true, currentState: 1}));

    res.send(200, devices);
}


module.exports = {
    url: "/:agreementId/devices/",
    get: getDevices
};