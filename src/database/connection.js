const mongoose = require("mongoose");
const config = require("../../config/config");

function connectToDatabase() {
  try {
    mongoose.connect(config.database.url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  connectToDatabase,
};
