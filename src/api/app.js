const express = require("express");
const app = express();
const middlewares = require("./middlewares");
const routes = require("./routes/tradeRoutes");

app.use(middlewares.jsonParser());
app.use("/api", routes);

module.exports = app;
