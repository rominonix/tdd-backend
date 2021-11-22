const { Users } = require("../database.json");
const { Router } = require("express");

// req controller
const userController=require('../controllers/userController')
const router = Router();

router.get("/users", userController.all);
router.get("/users/:login", userController.getUserById);
// router.post("/users", (req, res) => {
//   res.send("skurt was here");
// });
// router.delete("/users/:id", (req, res) => {
//   res.send("skurt was here");
// });

module.exports = router;