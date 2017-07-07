const Modifier = require("../modifier");

const options = [{ name: "Efficient", value: "80"}, { name: "Inefficient", value: "150"}];

class Refrigerator extends Modifier {

    get options() {
        return options;
    }

    get name() {
        return "Refrigerator";
    }

    get short() {
        return "refrigerator";
    }
}

module.exports = Refrigerator;