const Modifier = require("../electricity-modifier");

const options = [{ name: "Efficient", value: 1200}, { name: "Inefficient", value: 2000}];

class WashingMachine extends Modifier {

    get options() {
        return options;
    }

    get name() {
        return "Washing machine";
    }

    get short() {
        return "washing-machine";
    }
}

Modifier.add(WashingMachine);
module.exports = WashingMachine;