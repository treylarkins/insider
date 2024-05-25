require("dotenv").config();

const config = {
  environment: process.env.NODE_ENV || "development",
  server: {
    port: process.env.PORT || "3000",
    servername: "localhost",
  },
  database: {
    url: process.env.MONGO_DB_URL,
  },
};

module.exports = config;
