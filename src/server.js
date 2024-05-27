const express = require("express");
const mongoose = require("mongoose");
const config = require("../config/config");
const app = express();

const mongo_url = config.database.url;
const port = config.server.port;

async function connect() {
  try {
    await mongoose.connect(mongo_url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
