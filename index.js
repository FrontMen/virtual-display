const fs = require("fs");
const toonService = require("./services/Toon");
const express = require("express");
const bodyParser = require('body-parser');
const Handlebars = require("handlebars");
const Refrigerator = require("./modifiers/electricity/refrigerator");
const Toon = require("./models/toon");
const createPage = Handlebars.compile(fs.readFileSync("./templates/toon/create.hbs", "utf-8"));
const toonPage = Handlebars.compile(fs.readFileSync("./templates/toon/index.hbs", "utf-8"));
const status = require("./endpoints/status");
const gasConsumption = require("./endpoints/gas-consumption-data");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get(status.url, status.get);
app.get(gasConsumption.url, gasConsumption.get);

let i = 0;
// ROOT PAGE
app.get("/", function(req,res){
    res.send(createPage());
});


app.get("/toon/:agreementId", (req,res) => {
    let instance = toonService.get(req.params.agreementId);
    if(instance){
        res.send(toonPage({
            toon: instance,
            modifiers: instance.getModifiers()
        }));
    } else {
        res.status(404).send({ message: "No toon found with given agreement ID."});
    }
});
app.post("/toon/:agreementId", (req,res) => {
    let instance = toonService.get(req.params.agreementId);
    let modifiers = instance.getModifiers();
    modifiers.forEach((modifier) => {
        modifier.enabled = Object.keys(req.body).indexOf(modifier.name) > -1;
    });

    instance.updateModifiers(modifiers);
    res.redirect("/toon/" + instance.agreementId);
});

// CREATE VIRTUAL INSTANCE
app.post("/create", function(req,res){

    let toon = new Toon(i++);
    toonService.add(toon);
    res.redirect("/toon/" + toon.agreementId);
});

app.listen(3000, () => {
    console.log("App listening on port 3000.");
});

