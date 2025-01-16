var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
  // console.log('APP_NAME:', process.env.APP_NAME);
  // res.send(process.env.APP_NAME);
});

router.get("/json", function (req, res, next) {
  res.json({ message: "Hello, world!" });
});

module.exports = router;
