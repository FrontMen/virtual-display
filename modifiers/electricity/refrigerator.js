const Modifier = require("../modifier");

const options = [{ name: "Efficient", value: "80"}, { name: "Inefficient", value: "150"}];

class Refrigerator extends Modifier {
    constructor() {
        super("Refrigerator");
    }

    get options() {
        return options;
    }
}