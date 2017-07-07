const Modifier = require("../gas-modifier");

const options = [{name: "Winter", value: 1000}, {name: "Spring", value: 600}, {name: "Summer", value: 0}, {name: "Autumn", value: 650}];

class Season extends Modifier {

    get options() {
        return options;
    }

    get name() {
        return "Seasons";
    }

    get short() {
        return "seasons";
    }
}

Modifier.add(Season);
module.exports = Season;