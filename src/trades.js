const cheerio = require("cheerio");
const axios = require("axios");

const tradeData = [];

async function getTradeData() {
  try {
    const url = "https://www.capitoltrades.com/trades";
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const politicians = $("tbody .q-tr");
    politicians.each(function () {
      politicianName = $(this).find(".politician-name").text();
      tickerSymbol = $(this).find(".issuer-ticker").text();
      transaction = $(this).find(".tx-type").text();
      reportingGap = $(this).find(".reporting-gap-tier--2").text();

      tradeData.push({
        politicianName,
        tickerSymbol,
        transaction,
        reportingGap,
      });
    });
    console.log(tradeData);
  } catch (error) {
    console.error(error);
  }
}
getTradeData();
