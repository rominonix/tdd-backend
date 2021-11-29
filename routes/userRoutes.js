
const { Router } = require("express");

// req controller
const userController=require('../controllers/userController')
const router = Router();

router.get("/users", userController.allUser);
router.get("/users/:login", userController.getUserByLogin);
router.post("/users", userController.creatUser);
router.delete("/users/:login", userController.deleteUser);

module.exports = router;
