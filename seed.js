const User = require("./models/user");
const Product = require("./models/product");
const Cart = require("./models/cart");
const { v4: uuidv4 } = require("uuid");

let productsUuids = [];
const productSeed = async () => {
  let products = ["Monstera", "Lavender", "Bamboo", "Cactus", "Snake-plant"];
  for (const product of products) {
    let id = uuidv4();
    productsUuids.push(id);
    let randomPrice = Math.floor(Math.random(10) * 100);
    await Product.create({ id: id, name: product, price: randomPrice });
  }
};

let loginUuids = [];
const userSeed = async () => {
  let users = ["Kalle", "Romi", "Nilufar", "Anders", "Sven"];  
  for (const user of users) {
    let uid = uuidv4();
    loginUuids.push(uid);
    await User.create({ name: user, login: uid });
  }
  productSeed();
  cartSeed();
};
userSeed();

const cartSeed = async () => {
  for (let i = 0; i < 5; i++) {
    await Cart.create({
      amount: 1,
      ProductId: productsUuids[i],
      UserLogin: loginUuids[i],
    });
  }
};


