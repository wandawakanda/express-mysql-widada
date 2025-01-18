var express = require("express");
var router = express.Router();
router.post("/", async (req, res, next) => {
  //   try {
  //     const { name, brand, description } = req.body;
  //     const product = await Product.create({
  //       name,
  //       brand,
  //       description,
  //     });
  //     res.send(product);
  //   } catch (err) {
  //     next(err);
  //   }
  res.send("Hello world");
});

module.exports = router;
