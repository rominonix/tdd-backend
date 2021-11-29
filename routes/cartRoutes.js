
const { Router } = require("express");

// req controller
const cartController=require('../controllers/cartController')
const router = Router();

router.put("/carts/:userLogin/:itemId", cartController.updateCartItem);
router.delete("/carts/:userLogin/:itemId", cartController.deleteCartItem);

module.exports = router;



