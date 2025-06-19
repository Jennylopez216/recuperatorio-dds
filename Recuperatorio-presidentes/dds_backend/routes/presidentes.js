const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

router.get("/api/presidentes", async function (req, res) {
  // consulta de presidentes con filtros y paginacion

  let where = {};
  if (req.query.Nombre != undefined && req.query.Nombre !== "") {
    where.Nombre = {
      [Op.like]: "%" + req.query.Nombre + "%",
    };
  }
    let items = await db.presidentes.findAndCountAll({
      attributes: [
        "IdPresidente", 
        "Nombre",
        "FechaPresidencia",
        "Pais",
        "DuracionMandatoAños"
      ],
      order: [["Nombre", "ASC"]],
      where,
    });
    res.json(items.rows);
 });  

module.exports = router;
