const express = require("express");
const router = express.Router();

const products = require("./products")
const cart = require("./cart");
const auth = require("./auth");

router.use("/auth", auth);
router.use("/products", products);
router.use("/cart", cart);

module.exports = router;
