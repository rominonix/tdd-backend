const {Sequelize}= require('sequelize')

const db= new Sequelize({
    dialect:'sqlite',
    storage:'database/products.db'
})

module.exports = db