const express = require("express");
const status = require("./endpoints/status");

const app = express();


app.get(status.url, status.get);


app.listen(3000, () => {
    console.log("App listening on port 3000.");
});