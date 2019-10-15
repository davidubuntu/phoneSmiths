var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("Smiths HOME API");
});

module.exports = router;
