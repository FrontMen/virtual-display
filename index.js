const fs = require("fs");
const express = require("express");
const bodyParser = require('body-parser');
const Handlebars = require("handlebars");
const Refrigerator = require("./modifiers/electricity/refrigerator");
const Toon = require("./models/toon");
const indexPage = Handlebars.compile(fs.readFileSync("./templates/index.hbs", "utf-8"));
const status = require("./endpoints/status");
const gasConsumption = require("./endpoints/gas-consumption-data");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get(status.url, status.get);
app.get(gasConsumption.url, gasConsumption.get);

let toon = null;
// ROOT PAGE
app.get("/", function(req,res){
    res.send(indexPage({toon: toon}));
});

// CREATE VIRTUAL INSTANCE
app.post("/create", function(req,res){
    toon = new Toon();
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("App listening on port 3000.");
});