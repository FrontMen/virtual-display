const Modifier = require("../modifier");

const options = [{name: "Winter", value: 1000}, {name: "Spring", value: 600}, {name: "Summer", value: 0}, {name: "Autumn", value: 650}];

class Season extends Modifier {
    constructor() {
        super("Seasons");
    }

    get options() {
        return options;
    }
}