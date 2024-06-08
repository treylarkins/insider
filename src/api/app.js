const express = require("express");
const app = express();
const middlewares = require("./middlewares");

app.use(middlewares.jsonParser());

module.exports = app;
