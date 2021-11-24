const { Router } = require("express");
const productController = require('../controllers/productController')

const router = Router();


router.get('/products', productController.getProducts)
router.get("/products/:id", productController.getProductById);
router.post("/products", productController.createNewProduct) 
router.put("/products/:id", productController.updateProductById) 
router.delete("/products/:id", productController.deleteProductById);

module.exports = router;


// const { Router } = require("express");
// const productController = require('../controllers/productController')

// const router = Router();


// router.get('/products', productController.getProducts)
// router.get("/products/:id", productController.getProductById);
// router.post("/products", productController.createNewProduct) 
// // router.put("/products/:id", productControllers.updateProductById) 
// // router.delete("/products/:id", (req, res) => {
// //   res.send("delete product by id");
// // });

// module.exports = router;
