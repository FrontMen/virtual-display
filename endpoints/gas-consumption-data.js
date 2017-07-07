function getGasConsumption(req,res){
    console.log(req.query);
    res.send(200, { foo: "bar"});
}

///consumption/gas/data?interval=hours&fromTime=1420070400000&toTime=1451606400000

module.exports = {
    url: /^\/consumption\/gas\/data/,
    get: getGasConsumption
};