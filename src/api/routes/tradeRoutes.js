const express = require("express");
const router = express.Router();
const tradeController = require("../controllers/tradeController");

router.post("/", createTrade);
router.get("/opentrades", getOpenTrades);
router.get("/closedtrades", getClosedTrades);
router.put("/:id", updateTrade);

module.exports = router;
