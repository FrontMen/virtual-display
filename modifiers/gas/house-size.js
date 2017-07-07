const Modifier = require("../gas-modifier");

const options = [{name: "Small", value: -100}, {name: "Medium", value: 100}, {name: "Large", value: 100}];

class HouseSize extends Modifier {

    get options() {
        return options;
    }

    get name() {
        return "House size";
    }

    get short() {
        return "house-size";
    }
}

Modifier.add(HouseSize);
module.exports = HouseSize;