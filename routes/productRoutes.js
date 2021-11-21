const { Router } = require("express");
const productControllers = require('../controllers/productsController')

const router = Router();


router.get('/products', productControllers.getProducts)



// router.get("/products/:id", (req, res) => {
//   res.send("get product by id");
// });
// router.post("/products", (req, res) => {
//   res.send("post product");
// });
// router.delete("/products/:id", (req, res) => {
//   res.send("delete product by id");
// });

module.exports = router;
