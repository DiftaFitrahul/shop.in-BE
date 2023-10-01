const {Sequelize, DataTypes} = require('sequelize')
const  sequelize = require("../utils/database")


const Customer = sequelize.define('Customer', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        allowNull : false,
        primaryKey: true,  
    },
    name : {
        type : DataTypes.STRING,
        allowNull: false
    },
    phone:{
        type : DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull : false
    },
    address: DataTypes.STRING,
    photo_profile : DataTypes.STRING,
    status: DataTypes.STRING

})

module.exports = Customer;