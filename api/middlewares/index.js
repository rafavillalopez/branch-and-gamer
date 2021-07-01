const jwt = require("jsonwebtoken");


const validateToken = (req, res, next) => {

  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, "branchSecretP5", (err, data) => {
    req.user = { id: data.id };
  });

  next();

};

module.exports = {
  validateToken,
};
