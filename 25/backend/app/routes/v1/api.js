const express = require("express");
const router = new express.Router();
const weathersController = require("../../controllers/weathersController");

router.get("/weather", weathersController.index);

module.exports = router;
