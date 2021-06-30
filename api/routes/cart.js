const express = require("express");
const { Carrito } = require("../models");
const ProducstCarrito = require("../models/ProducstCarrito");
const router = express.Router();

router.post("/:userId", (req, res, next) => {
  const { userId } = req.params;
  Carrito.create({}).then((car) => {
    res.status(201).jason(car);
  });
});

router.post("/add/:carritoId/:productId", (req, res, next) => {
  const { carritoId, productId } = req.params;
  ProducstCarrito.findOrCreate({
    carritoId,
    productId,
  })
    .then((productInCar) => {
      return productInCar.add(1);
    })
    .then((updated) => {
      res.json(updated);
    })
    .catch(next);
});

router.put("/add/:carritoId/:productId", (req, res, next) => {
  const { carritoId, productId } = req.params;
  ProducstCarrito.findOrCreate({
    carritoId,
    productId,
  })
    .then((productInCar) => {
      console.log(productInCar);
      // return productInCar.add(1);
    })
    // .then((updated) => {
    //   res.json(updated);
    // })
    .catch(next);
});

module.exports = router;
