const Trade = require("../models/tradeModel");

const openTrade = async (req, res) => {
  const trade = new Trade({
    politician_name: req.body.politician_name,
    stock_ticker: req.body.stock_ticker,
    open_price: req.body.open_price,
    status: "open",
  });
  try {
    const newTrade = await trade.save();
    res.status(201).json(newTrade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTrades = async (req, res) => {
  try {
    const allTrades = await Trade.find();
    if (allTrades.length === 0) {
      res.status(404).json({ message: "no trades found" });
    }
    res.status(200).json(allTrades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTradesByStatus = async (req, res) => {
  try {
    const { statusFilter } = req.query;

    const filteredTrades = await Trade.find({ status: statusFilter });

    if (filteredTrades.length === 0) {
      res.status(404).json({ message: `no ${statusFilter} trades found` });
    }
    res.status(200).json(filteredTrades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const closeTrade = async (req, res) => {
  const tradeId = req.params.tradeId;
  try {
    const updatedTrade = await Trade.findByIdAndUpdate(
      tradeId,
      { status: "closed" },
      { new: true }
    );
    if (!updatedTrade) {
      return res.status(404).json({ message: "Trade not found" });
    }
    res.status(200).json(updatedTrade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  openTrade,
  getTrades,
  getTradesByStatus,
  closeTrade,
};
