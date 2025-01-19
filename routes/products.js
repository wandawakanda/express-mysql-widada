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

router.put("/:id", async (req, res) => {
  //update a record of product
  const id = req.params.id;

  //res.send(id);
  let product = await Product.findByPk(id);
  if (!product) {
    return res.status(404).json({
      status: "error",
      message: "Product not found",
    });
  }

  const schema = {
    name: "string|optional",
    brand: "string|optional",
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

  product = await product.update(req.body);
  return res.json(product);
  //res.send("ok");
});

module.exports = router;
