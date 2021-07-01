const S = require("sequelize");
const db = require("../db");

class ProducstCarrito extends S.Model {
  add(num) {
    return this.increment("quantity", { by: num });
  }

  remove(num) {
    return this.decrement("quantity", { by: num });
  }
}

ProducstCarrito.init(
  {
    quantity: {
      type: S.INTEGER,
      defaultValue: 1,
    },
  },
  { sequelize: db }
);

module.exports = ProducstCarrito;
