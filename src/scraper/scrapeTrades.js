const cheerio = require("cheerio");
const axios = require("axios");

async function scrapeTrades() {
  const tradeData = [];

  try {
    const url = "https://www.capitoltrades.com/trades";
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const politicians = $("tbody .q-tr");
    politicians.each(function () {
      politicianName = $(this).find(".politician-name").text();
      tickerSymbol = $(this).find(".issuer-ticker").text();
      transaction = $(this).find(".tx-type").text();
      reportingGap = $(this).find(".cell--reporting-gap span").text();

      tradeData.push({
        politicianName,
        tickerSymbol,
        transaction,
        reportingGap,
      });
    });
    console.log("\nTrades Recieved:");
    console.log(tradeData);
  } catch (error) {
    console.error(error);
  }
  return tradeData;
}

module.exports = { scrapeTrades };
