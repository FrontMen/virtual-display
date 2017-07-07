const Modifier = require("../gas-modifier");

const options = [{name: "Small", value: -100}, {name: "Medium", value: 100}, {name: "Large", value: 100}];

class HouseSize extends Modifier {
    constructor() {
        super("House size");
    }

    get options() {
        return options;
    }
}

module.exports = HouseSize;
Modifier.add(HouseSize);