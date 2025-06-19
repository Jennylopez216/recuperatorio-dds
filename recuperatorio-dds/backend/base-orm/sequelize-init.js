// configurar ORM sequelize
const { Sequelize, DataTypes } = require("sequelize");
//const sequelize = new Sequelize("sqlite:" + process.env.base );
const sequelize = new Sequelize("sqlite:" + process.env.base);


const enfermeros = sequelize.define(
  "enfermeros",
  {
    IdEnfermero: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NombreCompleto: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "NombreCompleto es requerido",
        },
        len: {
          args: true,
          msg: "NombreCompleto es requerido",
        },
      },
      unique: {
        args: true,
        msg: "este NombreCompleto ya existe en la tabla!",
      },
    },
    Especialidad: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Especialidad es requerido",
        }
      }
    },
    
    Antiguedad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Antiguedad es requerido",
        }
      }
    },
    FechaIngreso: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Fecha Ingreso es requerido",
        }
      }
    },
    
  },
  {
    // pasar a mayusculas
    hooks: {
      beforeValidate: function (enfermeros, options) {
        if (typeof enfermeros.NombreCompleto === "string") {
          enfermeros.NombreCompleto = enfermeros.NombreCompleto.toUpperCase().trim();
        }
      },
    },

    timestamps: false,
  }
);

module.exports = {
  sequelize,
  enfermeros,
};
