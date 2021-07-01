const express = require("express")
const router = express.Router()

const products = require("./products")
const cart = require("./cart");

router.use("/products", products)

router.use("/cart", cart);

module.exports = router