const { DataTypes } = require("sequelize");
const db = require("../connection");

const Product = db.define("Product", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  price: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
});

module.exports = Product;
