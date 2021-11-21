const { Products } = require("../database/database.json");

module.exports = {
  getProducts(req, res, next) {
    try {
      res.status(200).json({ data: Products });
    } catch (error) {
      next(error);
    }
  },
};
