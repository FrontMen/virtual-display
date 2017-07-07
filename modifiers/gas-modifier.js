const Modifier = require("./modifier");
const HouseSize = require("./gas/house-size");
const Season = require("./gas/house-size");

const modifiers = [];

class GasModifier extends Modifier {
    static get modifiers() {
        return modifiers;
    }

    static add(modifier) {
        modifiers.push(modifier);
    }
}

module.exports = GasModifier;

GasModifier.add(HouseSize);
GasModifier.add(Season);