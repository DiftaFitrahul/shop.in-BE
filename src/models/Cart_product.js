const {DataTypes} = require('sequelize')
const  sequelize = require("../utils/database")

const Cart_product = sequelize.define('Cart_product', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        allowNull : false,
        primaryKey: true,  
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Cart_product