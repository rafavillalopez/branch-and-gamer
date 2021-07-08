const express = require("express");
const { Valoration } = require("../models");
const { validateToken } = require("../middlewares");

const router = express.Router();

// ROUTE => /API/VALORACIONES

//Añadir una valoracion

router.post("/", validateToken, async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { productId, value } = req.body;
    const val1 = await Valoration.findOne({
      where: { userId, productId },
    });

    if (val1) return res.status(400).json({ msg: "already posted" });

    const val = await Valoration.create({ value, userId, productId });
    res.status(200).json(val);
  } catch (err) {
    next(err);
  }
});

//Devuelve todos las valoraciones de un usuario, el recibido en el token
router.get("/user", validateToken, async (req, res, next) => {
  try {
    const userId = req.user.id;
    const valorations = await Valoration.findAll({
      where: {
        userId,
      },
      attributes: ["value", "productId"],
    });
    console.log("VALORATION OF USER", valorations);
    res.status(200).json(valorations);
  } catch (err) {
    next(err);
  }
});

//Devuelve todos las valoraciones de un producto
router.get("/:id", async (req, res, next) => {
  try {
    const valorations = await Valoration.findAll({
      where: {
        productId: req.params.id,
      },
      attributes: ["value"],
    });
    console.log("VALORATIONs", valorations);
    res.status(200).json(valorations);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
