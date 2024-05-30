const express = require("express");
const database = require("./database");
const scraper = require("./scraper");
const process = require("./assessment");
const config = require("../config/config");
const app = express();
const port = config.server.port;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

database.connectToDatabase();
process.processTradesToBuy();
