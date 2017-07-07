const Modifier = require("../modifier");

const options = [{name: "Small", value: -100}, {name: "Medium", value: 100}, {name: "Large", value: 100}];

class Season extends Modifier {
    constructor() {
        super("House size");
    }

    get options() {
        return options;
    }
}