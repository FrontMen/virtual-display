const ElectricityModifier = require("../modifiers/electricity-modifier")
const GasModifier = require("../modifiers/gas-modifier")

class Toon {
    constructor(agreementId) {
        this.agreementId = agreementId;
        this.gasModifiers = GasModifier.modifiers.map(Modifier => new Modifier());
        this.electricityModifiers = ElectricityModifier.modifiers.map(Modifier => new Modifier());
    }
}

module.exports = Toon;