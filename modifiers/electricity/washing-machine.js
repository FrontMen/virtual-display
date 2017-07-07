const Modifier = require("../modifier");

const options = [{ name: "Efficient", value: "1200"}, { name: "Inefficient", value: "2000"}];

class WashingMachine extends Modifier {
    constructor() {
        super("Washing machine");
    }

    get options() {
        return options;
    }
}

module.exports = WashingMachine;