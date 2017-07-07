const toonService = require("../services/Toon");

function getStatus(req, res) {
    let toon = toonService.get(req.params.agreementId);
    res.send(200, {
        powerUsage: toon.currentPowerUsage,
        gasUsage: toon.currentGasConsumption,
        deviceStatusInfo: {
            device: toon.electricityModifiers.map(({name, currentValue, enabled, uuid}) => ({
                name,
                currentState: enabled ? 1 : 0,
                currentUsage: currentValue,
                devUUID: uuid,
                isConnected: true
            }))
        }
    });
}


module.exports = {
    url: "/:agreementId/status/",
    get: getStatus
};

//
// "powerUsage": {
//     "value": 1040,
//         "dayCost": 5.49,
//         "valueProduced": null,
//         "dayCostProduced": null,
//         "valueSolar": 700,
//         "maxSolar": null,
//         "dayCostSolar": null,
//         "avgSolarValue": null,
//         "avgValue": 250,
//         "avgDayValue": 6000,
//         "avgProduValue": null,
//         "avgDayProduValue": null,
//         "meterReading": 429000,
//         "meterReadingLow": 0,
//         "meterReadingProdu": null,
//         "meterReadingLowProdu": null,
//         "dayUsage": 7150,
//         "dayLowUsage": 0,
//         "todayLowestUsage": null,
//         "isSmart": 1
// },