

function getStatus(req,res){

    res.send(200, {
        powerUsage: {
            value: 0
        }
    });
}


module.exports = {
    url: /^\/status$/,
    get: getStatus
};