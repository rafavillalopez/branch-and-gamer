const express = require("express");
const { Carrito } = require("../models");
const ProducstCarrito = require("../models/ProducstCarrito");
const router = express.Router();

router.post("/add", (req, res, next) => {
  console.log("BAD");
  const { carritoId, productId } = req.body;
  ProducstCarrito.findOrCreate({
    where: {
      carritoId,
      productId,
    },
  })
    .then(([productInCar]) => {
      res.status(201).json(productInCar);
    })
    .catch(next);
});

router.post("/:userId", (req, res, next) => {
  console.log("GOOD");
  const { userId } = req.params;
  console.log(req.params)
  Carrito.findOrCreate({
    where: {
      userId,
      state: "inUse",
    },
  }).then(([car]) => {
    res.status(201).json(car);
  });
});

router.post("/delete", (req, res, next) => {
  const { carritoId, productId } = req.body;
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
