const { Router } = require("express");
const productController = require('../controllers/productController')

const router = Router();


router.get('/products', productController.getProducts)

module.exports = router;