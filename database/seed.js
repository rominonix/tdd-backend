const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

let Products = [
    "Monstera", 
    "Palletes", 
    "Bamboo", 
    "Cactus", 
    "Suculent", 
    "Orchid", 
    "Snake-plant", 
    "Africans mask",
    "Rose",
    "Acer Palmatum",
    "Tulpan",
    "Palm",
    "Eucalyptus",
    "Philodendrons",
    "Bougainvillea",
    "Agave",
    "Air Plant",
    "Amur Adonis",
    "Jasmine",
    "Azalea"
] 

let Users = [
    "Kalle",
    "Sven",
    "Anders", 
    "Romina",
    "Nilufar",
    "Alex",
    "Simon",
    "David",
    "Viktor",
    "Azeb",
    "Pelle",
    "André",
    "Lotta",
    "Olof",
    "Sven-Åke",
    "Carl",
    "Jörgen",
    "Richard",
    "Eva",
    "Sofia",
    "Henry"    
]


let readData = fs.readFileSync("./database.json")
let parsedData = JSON.parse(readData)
function seed(key, array){
    parsedData[key] = []
    for(let name of array) {
        if (key == "Products") {
            const randomPrice = Math.floor(Math.random() * 100)
            parsedData[key].push(
                {
                "id": uuidv4(),
                "name": name,
                "price": randomPrice
                }
            )
        } else {
            parsedData[key].push(
                {
                    "name": name,
                    "login": uuidv4()
                }
            )
        }
    }}
    
seed("Products", Products)
seed("Users", Users)

let stringData = JSON.stringify(parsedData)
fs.writeFileSync('./database.json', stringData)