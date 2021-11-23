const Product = require("../models/product");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const User = require('../models/user')


module.exports = {
 async getProducts(req, res, next) {
    try {
    const products =await Product.findAll({attributes: ['name']})
    console.log("1", products);
    console.log("2", Product);
    // res.status(200).json({products})
    res.json({products})
    } catch (error) {
      next(error);
    }
  },



  async allUser(req, res, next) {
    try {
        const users = await User.findAll({ attributes: ['name', 'login'] })
        res.json({ users })
    } catch (error) { next(error) }
},
}