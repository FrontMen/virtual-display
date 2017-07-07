//const modifier = require("./modifiers/gas");

function getGasConsumption(req,res){
    let response = {
        hours: [],
        days: [],
        weeks: [],
        months: [],
        years: []
    };

    console.log(req.query);
    //modifier
    // MAGIC FORMULA
    // EATS MODIFIERS
    res.send(200, response);
}

///consumption/gas/data?interval=hours&fromTime=1420070400000&toTime=1451606400000

module.exports = {
    url: /^\/consumption\/gas\/data/,
    get: getGasConsumption
};