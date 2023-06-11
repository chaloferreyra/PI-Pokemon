const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false
      },
      life: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      stroke: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      defending: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      speed: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      height: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      weight: {
        type: DataTypes.FLOAT,
        allowNull: true
      }
    },{
      timestamps: false,
    });
};

