const axios = require("axios");
const trades = require("../scraper");

function isValidTicker(trade) {
  return trade.tickerSymbol != "N/A" && trade.tickerSymbol != "";
}

function isBuy(trade) {
  return (
    trade.transaction === "buy" ||
    trade.transaction === "Buy" ||
    trade.transaction === "BUY"
  );
}

function validTrade(trade) {
  return isValidTicker(trade) && isBuy(trade);
}

function hasTradeOpprotunity(trade) {
  if (trade.reportingGap > 15) {
    return false;
  }
  return true;
}

async function addTradeToDB(trade) {
  try {
    const response = await axios.post(
      `https://localhost:${localhost}/api/trades`,
      trade
    );
    console.log("Trade added to DB: ", trade);
  } catch (error) {
    console.error("Error adding trade to DB");
  }
}

async function buyTrades() {
  const tradeList = await trades.scrapeTrades();

  for (let i = 0; i < tradeList.length; i++) {
    if (validTrade(tradeList[i]) && hasTradeOpprotunity(tradeList[i])) {
      console.log(tradeList[i]);
    } // Accessing individual elements
  }
}

module.exports = {
  buyTrades,
};
