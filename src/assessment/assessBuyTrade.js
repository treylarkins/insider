const { model } = require("mongoose");
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

async function processTradesToBuy() {
  const tradeList = await trades.scrapeTrades();

  for (let i = 0; i < tradeList.length; i++) {
    if (validTrade(tradeList[i]) && hasTradeOpprotunity(tradeList[i])) {
      console.log(tradeList[i]);
    } // Accessing individual elements
  }
}

module.exports = {
  processTradesToBuy,
};
