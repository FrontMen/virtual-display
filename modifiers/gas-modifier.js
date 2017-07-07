const Modifier = require("./modifier");

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

GasModifier.add(require("./gas/house-size"));
GasModifier.add(require("./gas/season"));