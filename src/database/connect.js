const mongoose = require("mongoose");
const config = require("../../config/config");
const mongo_url = config.database.url;

async function connectToDatabase() {
  try {
    await mongoose.connect(mongo_url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  connectToDatabase,
};
