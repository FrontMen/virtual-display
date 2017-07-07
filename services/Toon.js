let toons = [];

module.exports = {
    add: function(toon){
        toons.push(toon);
    },
    get: function(agreementId){
        return toons.find((toon) => toon.agreementId === parseInt(agreementId, 10));
    },
    remove: function(agreementId){
        let index = toons.findIndex((toon) => toon.agreementId === parseInt(agreementId, 10));
        if (index > -1){
            toons.splice(index, 1);
        }
    }
};