const Product = require("../models/product");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const { InvalidBody } = require("../errors/index");
const { isWord, isValidUuid, isNumber } = require("../utils");

module.exports = {
  async getProducts(req, res, next) {
    try {
      const products = await Product.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(200).json({ products });
    } catch (error) {
      next(error);
    }
  },

  async getProductById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findOne({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        where: {
          id: {
            [Op.eq]: id,
          },
        },
      });

      if (!id || !isValidUuid(id)) {
        throw new Error("This id are not valid");
      }
      res.json({ product });
    } catch (error) {
      next(error);
    }
  },

  async createNewProduct(req, res, next) {
    // control if product already exist in database
    try {
      let { name, price } = req.body;

      if (!name || !price) {
        res.status(400).json({
          message: "Must have name and price",
        });
        // throw new InvalidBody();
      }
      if (!isWord(name)) {
        throw new Error("Name must be words");
      }

      if (!isNumber(price)) {
        res.status(400).json({
          message: "Price must be a positiv number and integer",
        });
      } else {
        let id = uuidv4();
        let newProduct = await Product.create({
          id: id,
          name: name,
          price: price,
        });
        res.status(201).json({
          message: "You have registered a new product!",
        });
      }
    } catch (error) {
      next(error);
    }
  },

  async updateProductById(req, res, next) {
    try {
      const { id } = req.params;
      const { name, price } = req.body;
      const field = {};
      if (name) field.name = name;
      if (price) field.price = price;
      if (!isWord(name)) {

        res.status(400).json({ message: "Name must be words" }); 
        // throw new Error("Name must be words");
      }

      if (!isNumber(price)) {
        throw new Error("Price must be a number");
      }

      const getProduct = await Product.findOne({ where: { id } });
      if (!getProduct) {
        throw new Error(`Product with id: ${id} doesn't exist`);
      }

      await Product.update(field, { where: { id } });
      res.status(200).json({ message: "Product has updated!" });
    } catch (error) {
      next(error);
    }
  },

  async deleteProductById(req, res, next) {
    try {
      const { id } = req.params;
      const getProduct = await Product.findOne({ where: { id } });
      if (!getProduct) {
        throw new Error(`Product with ${id} doesn't exist`);
      }
      await getProduct.destroy();
      res.json({ message: "Product successfully deleted." });
    } catch (error) {
      next(error);
    }
  },
};
