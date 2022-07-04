const express = require("express");
const router = express.Router();


const weatherController = require("../controller/weather");

router.get("/",weatherController.home);
router.get("/weather",weatherController.getWeather);


module.exports = router;
