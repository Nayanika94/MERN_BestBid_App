const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { check, validationResult } = require("express-validator");
require("dotenv").config();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let ProductsSold = require("../models/ProductsSold");

//route Get api/productsSold
//desc Get all Products Sold
//access public
router.get("/", authMiddleware, async (req, res) => {
  try {
    const productsSold = await ProductsSold.find({});
    res.send(productsSold);
  } catch (err) {
    return res.status(500).send("Server error");
  }
});

//route Get api/productsSold/:id
//desc Get product sold by id
//access public
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const productSold = await ProductsSold.find({ userId: req.params.id });
    if (!productSold) {
      return res.status(404).send("products not found");
    }
    res.send(productSold);
  } catch (err) {
    return res.status(500).send(err);
  }
});

//route Post api/productsSold
//desc Insert product sold
//access public
router.post(
  "/",
  [
    check("productId", "Product Id is required").notEmpty(),
    check("userId", "User Id is required").notEmpty(),
    check("price", "Price is required").notEmpty().isInt({ min: 1 }),
  ],
  authMiddleware,
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const newProduct = await ProductsSold.create({
        productId: req.body.productId,
        userId: req.body.userId,
        price: req.body.price,
      });

      res.send({ newProduct });
    } catch (err) {
      return res.status(500).send("Server error");
    }
  }
);

module.exports = router;