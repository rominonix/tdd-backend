const { DataTypes } = require("sequelize");
const db = require("../database/connection");
const Product = require('./product');

const Cart = db.define("Cart", {
  
    amount: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
   
  });

  Product.hasMany(Cart)
  Cart.belongsTo(Product)
  module.exports = Cart
