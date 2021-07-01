const express = require("express");
const router = express.Router();

const products = require("./products")
const users = require("./users")
const cart = require("./cart");
const auth = require("./auth");


router.use("/products", products);
router.use("/users", users)
router.use("/cart", cart);
router.use("/auth", auth);

module.exports = router;
