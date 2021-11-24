const Product = require("../models/product");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");

module.exports = {
  async getProducts(req, res, next) {
    try {
      const products = await Product.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
        if (products.length === 0) {
          throw new Error('This database is empty');
        }
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

      if (!id) {
        throw new Error("You must to give a product id");
      }
      res.json({ product });
    } catch (error) {
      next(error);
    }
  },

  async createNewProduct(req, res, next) {
    try {
      let { name, price } = req.body;
      // if( !name || !price){ throw new InvalidBody(['name','price'])}
      let id = uuidv4();
      let newProduct = await Product.create({
        id: id,
        name: name,
        price: price,
      });
      res.json({
        message: `You have registered a new product! Product name is: ${newProduct.name}!`,
      });
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

      const getProduct = await Product.findOne({ where: { id } });
      if (!getProduct) {
        throw new Error(`Product with id: ${id} doesn't exist`);
      }

      await Product.update(field, { where: { id } });
      res.json({ message: "Product has updated!" });
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
