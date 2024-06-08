const buyTrade = require("./buyTrade");
const sellTrade = require("./sellTrade");

module.exports = {
  ...buyTrade,
  ...sellTrade,
};
