const mongoose = require("mongoose");

const TradeSchema = new mongoose.Schema(
  {
    politician_name: {
      type: String,
      required: true,
    },

    stock_ticker: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      required: true,
    },
  },
  {
    Timestamp: true,
  }
);

const Trade = mongoose.model("Trade", TradeSchema);

module.exports = Trade;
