var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  //res.send("Hello world");
  res.send(process.env.APP_NAME);
});

router.get("/me", function (req, res, next) {
  res.send("About us");
});

module.exports = router;
