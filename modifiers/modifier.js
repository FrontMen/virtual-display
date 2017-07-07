let i = 0;

class Modifier {
    constructor() {
        this.uuid = i++;
        this.enabled = false;
        this.selectRandomOption();
    }

    get currentValue() {
        return this.enabled ? this.currentOption && this.currentOption.value: 0;
    }

    selectOption(option) {
        this.currentOption = option;
    }

    selectRandomOption() {
        const index = Math.floor(Math.random() * this.options.length);
        this.selectOption(this.options[index]);
    }

    get options() {
        return [];
    }
}

module.exports = Modifier;