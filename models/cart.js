const { DataTypes } = require("sequelize");
const db = require("../connection");
const Product = require('./product');
const User = require('./user');

const Cart = db.define("Cart", {
  
    amount: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
   
  });

  Product.hasMany(Cart)
  User.hasMany(Cart)
  Cart.belongsTo(Product)
  Cart.belongsTo(User)
  module.exports = Cart
