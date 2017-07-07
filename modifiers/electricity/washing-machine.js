const Modifier = require("../electricity-modifier");

const options = [{ name: "Efficient", value: "1200"}, { name: "Inefficient", value: "2000"}];

class Refrigerator extends Modifier {
    constructor() {
        super("Washing machine");
    }

    get options() {
        return options;
    }
}

module.exports = Refrigerator;
Modifier.add(Refrigerator);