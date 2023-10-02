const {DataTypes} = require('sequelize')
const  sequelize = require("../utils/database")

const Order_product = sequelize.define('Order_product', {
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

module.exports = Order_product