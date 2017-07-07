const Modifier = require("./modifier");

const modifiers = [];

class ElectricityModifier extends Modifier {
    static get modifiers() {
        return modifiers;
    }

    static add(modifier) {
        modifiers.push(modifier);
    }
}

module.exports = ElectricityModifier;