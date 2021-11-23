// const fs = require('fs');
const User = require("./models/user");
const Product = require("./models/product");
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
