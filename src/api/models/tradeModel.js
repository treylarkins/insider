const { Double } = require("mongodb");
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

    open_price: {
      type: Number,
      required: true,
    },

    close_price: {
      type: Number,
      required: false,
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
