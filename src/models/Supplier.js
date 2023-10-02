const { DataTypes} = require('sequelize')
const  sequelize = require("../utils/database")

const Supplier = sequelize.define('Supplier', {
    id : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password : {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo:DataTypes.STRING,
    status: DataTypes.STRING

});

module.exports = Supplier;