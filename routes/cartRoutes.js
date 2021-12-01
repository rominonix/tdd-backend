const { Router } = require("express");

// req controller
const cartController = require("../controllers/cartController");
const router = Router();

router.get("/carts/:userLogin", cartController.getItemsInCart);
router.post("/carts/:userLogin", cartController.createNewItem);
router.put("/carts/:userLogin/:itemId", cartController.updateCartItem);
router.delete("/carts/:userLogin/:itemId", cartController.deleteCartItem);

module.exports = router;
