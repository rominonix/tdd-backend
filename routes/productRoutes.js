const { Router } = require("express");
const productControllers = require('../controllers/productsController')

const router = Router();


router.get('/products', productControllers.getProducts)
router.get("/products/:id", productControllers.getProductById);
router.post("/products", productControllers.createNewProduct) 
// router.put("/products/:id", productControllers.updateProductById) 
// router.delete("/products/:id", (req, res) => {
//   res.send("delete product by id");
// });

module.exports = router;
