const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('shop.in', 'postgres', 'fitrahuldifta354', {
    host : 'localhost', 
    dialect : 'postgres'
})

module.exports =   sequelize;