// const fs = require('fs');
const User = require("./models/user");
const Product = require("./models/product");
const Cart = require("./models/cart");
const { v4: uuidv4 } = require("uuid");

User.create({ name: "Kalle", login: uuidv4() });
User.create({ name: "Anders", login: uuidv4() });
User.create({ name: "Sven", login: uuidv4() });
User.create({ name: "Nilufar", login: uuidv4() });
User.create({ name: "Romina", login: uuidv4() });

const randomPrice = Math.floor(Math.random() * 100);

Product.create({ id:uuidv4(), name: "Monstera", price: randomPrice });
Product.create({ id:uuidv4(), name: "Cactus", price: randomPrice });
Product.create({ id:uuidv4(), name: "Bamboo", price: randomPrice });
Product.create({ id:uuidv4(), name: "Orchid", price: randomPrice });
Product.create({ id:uuidv4(), name: "Snake-plant", price: randomPrice });



Cart.create({ amount: 1, ProductId: "f7bd1b82-e3cf-4252-b57a-3dbe0dccda13" ,UserLogin:"ce6ab499-60fe-43b4-9a1c-e4590edc0540"});
Cart.create({ amount: 1, ProductId: "c3d912b2-68d1-47a4-a0d3-f25a5776b10c" ,UserLogin:"cfbc37b9-cfc7-4a87-9614-ae7c448ae044"});
Cart.create({ amount: 1, ProductId: "417c5d33-c82d-4515-8879-b5e8ce7695f4" ,UserLogin:"0b091260-10fe-4ac6-b122-e58a398587d9"});
Cart.create({ amount: 1, ProductId: "c845823c-deea-4a8d-bc88-d1d6f48f7561" ,UserLogin:"bb9ffa46-38cf-4f7a-9f98-1d18b5d14377"});
Cart.create({ amount: 1, ProductId: "5c6cb3c1-2777-4452-a6c2-436dc0c92e54" ,UserLogin:"5500f029-ad47-4bda-8d6b-dae254e2c3a1"});
// let Products = [
//     "Monstera",
//     "Palletes",
//     "Bamboo",
//     "Cactus",
//     "Suculent",
//     "Orchid",
//     "Snake-plant",
//     "Africans mask",
//     "Rose",
//     "Acer Palmatum",
//     "Tulpan",
//     "Palm",
//     "Eucalyptus",
//     "Philodendrons",
//     "Bougainvillea",
//     "Agave",
//     "Air Plant",
//     "Amur Adonis",
//     "Jasmine",
//     "Azalea"
// ]

// let Users = [
//     "Kalle",
//     "Sven",
//     "Anders",
//     "Romina",
//     "Nilufar",
//     "Alex",
//     "Simon",
//     "David",
//     "Viktor",
//     "Azeb",
//     "Pelle",
//     "André",
//     "Lotta",
//     "Olof",
//     "Sven-Åke",
//     "Carl",
//     "Jörgen",
//     "Richard",
//     "Eva",
//     "Sofia",
//     "Henry"
// ]

// let readData = fs.readFileSync("./database.json")
// let parsedData = JSON.parse(readData)
// function seed(key, array){
//     parsedData[key] = []
//     for(let name of array) {
//         if (key == "Products") {
//             const randomPrice = Math.floor(Math.random() * 100)
//             parsedData[key].push(
//                 {
//                 "id": uuidv4(),
//                 "name": name,
//                 "price": randomPrice
//                 }
//             )
//         } else {
//             parsedData[key].push(
//                 {
//                     "name": name,
//                     "login": uuidv4()
//                 }
//             )
//         }
//     }}

// seed("Products", Products)
// seed("Users", Users)

// let stringData = JSON.stringify(parsedData)
// fs.writeFileSync('./database.json', stringData)
