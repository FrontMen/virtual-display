function getStatus(req,res){
    res.send(200, { foo: "bar"});
}


module.exports = {
    url: "/status",
    get: getStatus
};