const { unauthorized, cartItemNotFound } = require("../errors/index");
const { v4: uuidv4 } = require("uuid");
const Cart = require("../models/cart");
const { isValidNumber } = require("../utils");

module.exports = {
  async getItemsInCart(req, res, next) {
    try {
      const cartItems = await Cart.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(200).json({ cartItems });
    } catch (error) {
      next(error);
    }
  },

  async createNewItem(req, res, next) {
    // control if product already exist in database
    try {
      let { userLogin } = req.params;
      let { amount, productId } = req.body;

      if (!amount || !productId) {
        res.status(400).json({
          message: "Must give valid information",
        });
        // throw new InvalidBody();
      }

      if (!isValidNumber(amount)) {
        res.status(400).json({
          message: "Amount must be a positiv number and integer",
        });
      } else {
        let newItem = await Cart.create({
          ProductId: productId,
          amount: amount,
          UserLogin: userLogin,
        });
        res.status(201).json({
          message: "You have registered a new item in cart!",
        });
      }
    } catch (error) {
      next(error);
    }
  },

  async updateCartItem(req, res, next) {
    try {
      const ProductId = req.params.itemId;
      const userLogin = req.params.userLogin;
      const { amount } = req.body;
      const field = {};
      if (amount) field.amount = amount;
      const cartItem = await Cart.findOne({ where: { ProductId } });
      if (!cartItem) {
        throw new cartItemNotFound(ProductId);
      }
      if (cartItem.UserLogin != userLogin) {
        throw new unauthorized();
      }
      await Cart.update(field, { where: { ProductId } });
      res.json({ message: "Updated" });
    } catch (error) {
      next(error);
    }
  },

  async deleteCartItem(req, res, next) {
    try {
      const ProductId = req.params.itemId;
      const userLogin = req.params.userLogin;

      const cartItem = await Cart.findOne({ where: { ProductId } });
      if (!cartItem) {
        throw new cartItemNotFound(ProductId);
      }
      if (cartItem.UserLogin != userLogin) {
        throw new unauthorized();
      }
      await cartItem.destroy();
      res.json({ message: "cart item has deleted" });
    } catch (error) {
      next(error);
    }
  },
};
