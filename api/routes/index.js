const express = require("express");
const router = express.Router();

const auth = require("./auth");
const users = require("./users");
const products = require("./products");
const cart = require("./cart");
const valoraciones = require("./valoraciones");
const categories = require("./categories");


router.use("/auth", auth);
router.use("/users", users);
router.use("/products", products);
router.use("/cart", cart);
router.use("/valoraciones", valoraciones);
router.use("/categories", categories);

module.exports = router;
