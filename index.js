const express = require("express");

const app = express();


app.get("/status", (req, res) => {
    res.send("Status call");
});


app.listen(3000, () => {
    console.log("App listening on port 3000.");
});