const express = require("express");
const morgan = require("morgan");

const db = require("./db");
const app = express();

// LOGGUER
app.use(morgan("dev"));

// PARSERS
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// RUTA PRUEBA
app.use("/", (req, res, nex) => {
  res.send("ESTAS EN '/'");
});



const PORT = 3001;
const url = "http://localhost:";

db.sync()
  .then(() => {
    console.log(`Coneeccion a base de datos completa`);
    app.listen(PORT, () => {
      console.log(`estamos conectados y escuchando en ${url + PORT}`);
    });
  })
  .catch((err) => console.log(err));
