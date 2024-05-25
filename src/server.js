const express = require("express");
const mongoose = require("mongoose");
const app = express();

const mongo_url = process.env.MONGO_DB_URL;
const port = process.env.PORT;

async function connect() {
  try {
    mongoose.connect(mongo_url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
