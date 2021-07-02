const express = require("express");
const { Carrito } = require("../models");
const ProducstCarrito = require("../models/ProducstCarrito");
const router = express.Router();

/* 

Estas rutas solo deberian estar disponibles para un 
usurio logueado, por eso al entrar deberian aprobar un middleware de JWT y asegurarse de que tienen un token valido

*/

router.post("/add", (req, res, next) => {
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

router.get("/items/:id", (req, res, next) => {
  ProducstCarrito.findAll({
    where: {
      carritoId: req.params.id,
    },
  })
    .then((producst) => {
      res.status(200).json(producst);
    })
    .catch(next);
});

router.post("/:userId", (req, res, next) => {
  const { userId } = req.params;
  console.log(req.params);
  Carrito.findOrCreate({
    where: {
      userId,
      state: "inUse",
    },
  }).then(([car]) => {
    res.status(201).json(car);
  });
});

router.delete("/:carritoId/:productId", (req, res, next) => {
  const { carritoId, productId } = req.params;
  ProducstCarrito.destroy({
    where: {
      carritoId,
      productId,
    },
  })
    .then((response) => {
      res.json({ msg: `Deleted ${response} product from ${carritoId}` });
    })
    .catch(next);
});

router.put("/", (req, res, next) => {
  /* En esta ruta se pueden agregar o remover uno (1) de un mismo producto en el carrito, necesita una key "type: 'add'", o type: 'remove', que define el metodo a usar, tambien necesita el carritoId y el productId en el body
  
  Ejemplo: 

{
  "carritoId": 1,
  "productId" : 3,
  "type": "remove" / "add"
} 
  
  */

  const { carritoId, productId, type } = req.body;

  ProducstCarrito.findOne({
    where: {
      carritoId,
      productId,
    },
  })
    .then((productInCar) => {
      return productInCar[type]();
    })
    .then((updated) => {
      res.sendStatus(200).json(updated);
    })
    .catch(next);
});

module.exports = router;
