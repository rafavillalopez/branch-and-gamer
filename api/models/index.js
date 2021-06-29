const User = require("./User");
const Carrito = require("./Carrito");
const Product = require("./Product");
const Valoration = require("./Valoration");
const Coment = require("./Coment");
const Category = require("./Category");
const ProductsCarrito = require("./ProducstCarrito");

// RELATIONS

User.belongsToMany(Product, { through: "favorites" });

Product.belongsToMany(Category, { through: "pruductscategories" });
Category.belongsToMany(Product, { through: "pruductscategories" });

User.belongsToMany(Comment);
Product.belongsToMany(Comment);
Coment.hasOne(User, { as: "userId" });
Coment.hasOne(Product, { as: "prductId" });

Product.belongsToMany(Valoration);
Valoration.hasOne(Product, { as: "productId" });

User.belongsToMany(Carrito)
Carrito.hasOne(User);
Carrito.belongsToMany(Product, { through: ProductsCarrito });
Product.belongsToMany(Carrito, { through: ProductsCarrito });


module.exports = {
  User,
  Carrito,
  Product,
  Valoration,
  Coment,
  Category,
};
