const config = require("../config/config");
const process = require("./process");
const database = require("./database");
const app = require("./api/app");

const PORT = config.server.port;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

database.connectToDatabase();

process.processTradesToBuy();
