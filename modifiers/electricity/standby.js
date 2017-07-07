const Modifier = require("../electricity-modifier");

const options = [{name: "Low", value: 50}, {name: "Mid", value: 100}, {name: "High", value: 250}];

class Standby extends Modifier {

    get options() {
        return options;
    }

    get name() {
        return "Standby";
    }

    get short() {
        return "standby";
    }
}

Modifier.add(Standby);
module.exports = Standby;