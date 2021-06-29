const S = require("sequelize");
const db = require("../db");

class Carrito extends S.Model {}

Carrito.init(
  {
    state: {
      type: S.ENUM({
        values: ["pendiente", "confirmado", "rechazado"],
      }),
    },
  },
  { sequelize: db, modelName: "carritos" }
);

module.exports = Carrito;
