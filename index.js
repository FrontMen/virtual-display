const express = require("express");
const status = require("./endpoints/status");
const gasConsumption = require("./endpoints/gas-consumption-data");

const app = express();


app.get(status.url, status.get);
app.get(gasConsumption.url, gasConsumption.get);

app.listen(3000, () => {
    console.log("App listening on port 3000.");
});