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
