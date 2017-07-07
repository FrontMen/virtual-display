const fs = require("fs");
const toonService = require("./services/Toon");
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const Handlebars = require("handlebars");
const Toon = require("./models/toon");
const createPage = Handlebars.compile(fs.readFileSync("./templates/toon/create.hbs", "utf-8"));
const toonPage = Handlebars.compile(fs.readFileSync("./templates/toon/index.hbs", "utf-8"));
const status = require("./endpoints/status");
const getDevices = require("./endpoints/get-devices");
const putDevices = require("./endpoints/put-devices");
const gasConsumption = require("./endpoints/gas-consumption-data");

const app = express();
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, authorization, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use(cors());
// app.on("MethodNotAllowed", function(request, response) {
//     if(request.method.toUpperCase() === "OPTIONS") {
//         // Send the CORS headers
//         //
//         response.header("Access-Control-Allow-Credentials", true);
//         response.header("Access-Control-Allow-Headers", "Origin, authorization, X-Requested-With, Content-Type, Accept");
//         response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//         response.header("Access-Control-Allow-Origin", request.headers.origin);
//         response.header("Access-Control-Max-Age", 0);
//         response.header("Content-type", "text/plain charset=UTF-8");
//         response.header("Content-length", 0);
//
//         response.send(204);
//     } else {
//         response.send(new restify.MethodNotAllowedError());
//     }
// });
app.get("/agreements", function(req,res) {
   res.send([
       {
           "agreementId": "1",
           "agreementIdChecksum": "1",
           "street": "Brink",
           "houseNumber": "1",
           "postalCode": "0000",
           "city": "Ons Dorp",
           "heatingType": "GAS",
           "displayCommonName": "qba-000-0001",
           "displayHardwareVersion": "qb2/qby/4.4.60",
           "displaySoftwareVersion": "qb2/qby/4.4.60",
           "isToonSolar": false,
           "isToonly": false
       }
   ]);
});
app.post("/agreements", function(req,res){
    res.send();
});
app.get("/token/", function(req, res) {
    res.send();
});
app.post("/token/", function(req, res) {
    res.send({
        "refresh_token": "a",
        "access_token": "b",
        "scope": "default",
        "token_type": "Bearer",
        "expires_in": 60 * 60 * 1000
    });
});
app.post("/revoke", function(req, res) {
    res.send();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.get(status.url, status.get);
app.get(getDevices.url, getDevices.get);
app.put(putDevices.url, putDevices.put);
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

app.listen(8080, () => {
    console.log("App listening on port 3000.");
});

