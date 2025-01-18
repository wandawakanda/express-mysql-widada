var express = require("express");
var router = express.Router();
const Validator = require("fastest-validator");
const v = new Validator();

const { Product } = require("../models");

router.post("/", async (req, res, next) => {
  //add a new record of product
  const schema = {
    name: "string",
    brand: "string",
    description: "string|optional",
  };
  const validate = v.validate(req.body, schema);

  if (validate.length) {
    //ada error
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }
  //res.send("ok");
  const { name, brand, description } = req.body;
  const product = await Product.create({
    name,
    brand,
    description,
  });
  //res.send(product);
  //return product;
  return res.json(product);
});

module.exports = router;
