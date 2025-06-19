// configurar ORM sequelize
const { Sequelize, DataTypes } = require("sequelize");
//const sequelize = new Sequelize("sqlite:" + process.env.base );
const sequelize = new Sequelize("sqlite:" + "./.data/pymes.db");

// definicion del modelo de datos

const presidentes = sequelize.define('presidentes', {
  IdPresidente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },  
  Nombre: {
    type: DataTypes.STRING(60),
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Nombre es requerido",
      },
      len: {
        args: [5, 60],
        msg: "Nombre debe ser tipo caracteres, entre 5 y 60 de longitud",
      },
    },
  },
  FechaPresidencia: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    notNull: {
      args: true,
      msg: "FechaPresidencia es requerida",
    }
  },

  Pais: {
    type: DataTypes.STRING(60),
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Pais es requerido",
      },
    },
  },

  DuracionMandatoAños: {
    type: DataTypes.INTEGER,    
    notNull: {
      args: true,
      msg: "DuracionMandatoAños es requerido",
    },
  }, 
},
{
  // pasar a mayusculas
  hooks: {
    beforeValidate: function (presidentes, options) {
      if (typeof presidentes.Nombre === "string") {
        presidentes.Nombre = presidentes.Nombre.toUpperCase().trim();
      }
    },
  },

  timestamps: false,
}
);

module.exports = {
  sequelize,
  presidentes
};
