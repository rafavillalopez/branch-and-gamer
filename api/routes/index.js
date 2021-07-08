const express = require("express");
const router = express.Router();

const auth = require("./auth");
const users = require("./users");
const products = require("./products");
const cart = require("./cart");
<<<<<<< HEAD
const valoraciones = require("./valoraciones");
=======
const categories = require("./categories");

>>>>>>> e6c635cb42e7afcc886f51efa0d23ccad444f904

router.use("/auth", auth);
router.use("/users", users);
router.use("/products", products);
router.use("/cart", cart);
<<<<<<< HEAD
router.use("/valoraciones", valoraciones);
=======
router.use("/categories", categories);
>>>>>>> e6c635cb42e7afcc886f51efa0d23ccad444f904

module.exports = router;
