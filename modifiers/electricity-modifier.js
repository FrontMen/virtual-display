const Modifier = require("./modifier");
const Refrigerator = require("./electricity/refrigerator");
const WashingMachine = require("./electricity/washing-machine");

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

ElectricityModifier.add(Refrigerator);
ElectricityModifier.add(WashingMachine);