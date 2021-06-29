const S = require("sequelize");
const db = require("../db");

class Product extends S.Model {
  // PROBAR METHODS WHIT SEQUELIZE MAKE SURE THEY INCREMENT/DECREMENT IN THE DB
  add(num) {
    return this.increment("quantity", { by: num });
  }

  remove(num) {
    return this.decrement("quantity", { by: num });
  }
}

Product.init(
  {
    title: {
      type: S.STRING,
      allowNull: false,
    },
    marca: {
      type: S.STRING,
      defaultValue: "",
    },
    price: {
      type: S.INTEGER,
      allowNull: false,
    },
    imageUrl: {
      type: S.STRING,
      defaultValue:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/No_image_available_450_x_600.svg/450px-No_image_available_450_x_600.svg.png",
    },
    desciption: {
      type: S.TEXT,
      defaultValue: "",
    },
    quantity: {
      type: S.INTEGER,
      defaultValue: 0,
    },
    colors: {
      //! PROBAR SI SE LE PASA UN ARRAY THE JAVASCRIPT?
      type: S.ARRAY(S.STRING),
      defaultValue: [],
    },
    avalibleInStock: {
      type: S.VIRTUAL,
      get() {
        return Number(this.getDataValue("quantity")) > 0;
      },
    },
  },
  { sequelize: db, modelName: "products" }
);

module.exports = Product;
