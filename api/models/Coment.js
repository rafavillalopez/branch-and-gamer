const S = require("sequelize");
const db = require("../db");

class Coment extends S.Model {}

Coment.init(
  {
    body: {
      type: S.TEXT,
      validate: {
        notEmpty: true,
        notNull: true,
      },
    },
  },
  { sequelize: db, modelName: "coments" }
);
