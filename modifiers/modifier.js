class Modifier {
    constructor(name) {
        this.enabled = false;
        this.name = name;
        this.value = 0;
        this.currentOption = null;
        this.selectRandomOption();
    }

    get currentValue() {
        return this.enabled ? this.currentOption && this.currentOption.value || this.value : 0;
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