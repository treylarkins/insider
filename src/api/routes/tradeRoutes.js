const express = require("express");
const router = express.Router();
const tradeController = require("../controllers/tradeController");

router.post("/", tradeController.openTrade);
router.get("/trades", tradeController.getTrades);
router.get("/trades/:status", tradeController.getTradesByStatus);
router.put("/:tradeId", tradeController.closeTrade);

module.exports = router;
