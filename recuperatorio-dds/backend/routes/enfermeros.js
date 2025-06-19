const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

router.get("/api/enfermeros", async function (req, res) {
  // consulta de articulos con filtros y paginacion

  let where = {};
  if (req.query.NombreCompleto != undefined && req.query.NombreCompleto !== "") {
    where.NombreCompleto = {
      [Op.like]: "%" + req.query.NombreCompleto + "%",
    };
  }
    let items = await db.enfermeros.findAndCountAll({
      attributes: [
        "IdEnfermero", 
        "NombreCompleto",
        "Especialidad",
        "Antiguedad",
        "FechaIngreso"
      ],
      order: [["NombreCompleto", "ASC"]],
      where,
    });
    res.json(items.rows);
 });  
module.exports = router;

