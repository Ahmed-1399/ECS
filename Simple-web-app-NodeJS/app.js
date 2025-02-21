const express = require("express");
const path = require("path"); // Import the 'path' module

const app = express();

const port = 3030;


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port);
