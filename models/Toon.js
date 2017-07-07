const ElectricityModifier = require("../modifiers/electricity-modifier")
const GasModifier = require("../modifiers/gas-modifier")

class Toon {
    constructor(agreementId) {
        this.agreementId = agreementId;
        this.gasModifiers = GasModifier.modifiers.map(Modifier => new Modifier());
        this.electricityModifiers = ElectricityModifier.modifiers.map(Modifier => new Modifier());
        this.modifiers = this.gasModifiers.concat(this.electricityModifiers);
    }

    getModifiers() {
        return this.modifiers.map(({name, short, enabled, options, selectedOption}) => ({name, short, enabled, options, selectedOption}));
    }

    updateModifiers(modifiers) {
        modifiers.forEach(m => {
            const modifier = this.modifiers.find(x => x.short === m.short);

            if (modifier) {
                modifier.enabled = m.enabled;
            }
        });
    }
}

module.exports = Toon;