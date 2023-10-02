const {DataTypes} = require('sequelize')
const  sequelize = require("../utils/database")

const Order = sequelize.define('Order', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        allowNull : false,
        primaryKey: true,  
    }
});

module.exports = Order