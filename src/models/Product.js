const { DataTypes} = require('sequelize')
const  sequelize = require("../utils/database")

const Product = sequelize.define('Products', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        allowNull : false,
        primaryKey: true,    
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull:false
    },
    quantity:{
        type : DataTypes.INTEGER,
        allowNull: false,
    },
    description:{
        type : DataTypes.STRING,
        allowNull: false
    },
    imageUrl:DataTypes.STRING
})

module.exports = Product