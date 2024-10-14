const express = require("express");
const router = express.Router();

const db = require("../base-orm/sequelize-init"); //Se importa el ORM ( db), donde se han definido 
                                                //los modelos articulosfamiliasy articulos.

router.get("/api/articulosfamilias", async function (req, res, next) {
  let data = await db.articulosfamilias.findAll({ //todas las filas de la tabla articulsfamilias

    attributes: ["IdArticuloFamilia", "Nombre"],//selecciona solo las columnas IdArticuloFamilia y Nombre
  });
  res.json(data); //conviert el objeto data en una respuesta JSON y lo envia d vuelta al cliente que hizo la solicitud HTTP
});

module.exports = router;
