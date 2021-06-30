const express = require("express")
const router = express.Router()

const products = require("./products")
const cart = require("./cat");

router.use("/products", products)

router.use("/cat", cart);

module.exports = router