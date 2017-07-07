const Modifier = require("./modifier");

const modifiers = [];

class GasModifier extends Modifier {
    static get modifiers() {
        return modifiers;
    }

    static add(modifier) {
        modifiers.add(modifier);
    }
}

module.exports = GasModifier;