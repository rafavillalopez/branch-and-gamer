const express = require("express");
const { Carrito, User, ProducstCarrito } = require("../models");
const router = express.Router();
const transporter = require('../mailer')
const { isAdmin, validateToken } = require('../middlewares')
/* 

Estas rutas solo deberian estar disponibles para un 
usurio logueado, por eso al entrar deberian aprobar un middleware de JWT y asegurarse de que tienen un token valido

*/

//Añadir un item al carrito 
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

//Devuelve todos los items de un carrito
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

//Ruta de prueba para crear carrito (no se usa)
router.post("/", isAdmin, (req, res, next) => {
  Carrito.create(
    req.body
  ).then((car) => {
    res.status(201).json(car);
  });
});

//Crea un carrito para un usuario loggeado
router.post("/:userId", (req, res, next) => {
  const { userId } = req.params;
  Carrito.findOrCreate({
    where: {
      userId,
      state: "inUse",
    },
  }).then(([car]) => {
    res.status(201).json(car);
  });
});

//Eliminar un item del carrito (loggeado)
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

//Modificar la cantidad de un item en el carrito
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
      res.status(200).json(updated);
    })
    .catch(next);
});

//Compro carrito y envío mail
router.get("/buy", validateToken, async (req, res) => {

  if(!req.user) return res.status(401).json({ message: 'Usuario no loggeado' })

  const { id } = req.user
  //Busco el user con el id.
  //busco carrito con el userId y el estado "inUse" y lo cambio a pendiente
  //envio mail de notificacion "compra pendiente"
  let promesa1 = Carrito.findOne({ where: { userId: id, state: "inUse"}})
    .then(carrito => carrito.update({ state: "pending" }))

  let promesa2 = User.findeOne({ where: { id: id }})
    .then(data => data)

  const [ , user ] = await Promise.all([promesa1, promesa2])

  //Buscar ProductsCarrito con este id
  //Mailing
  transporter.sendEmail({
    from: '"Bienvenido a la tecnología." <branchandgamer@gmail.com>',
    to: user.email,
    subject: 'Bienvenido a la tecnología.',
    html: `<h2> Bienvenido, ${user.name}! \nLa compra fué realizada con éxito.</h2>`
  }).catch(() => res.status(400).json({ message: 'Algo malió sal' }))

  //Termino y devuelvo
  res.status(200).json()
})

module.exports = router;
