const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/utils/database');
const customerRoutes = require('./src/routes/customer');
const supplierRoutes = require('./src/routes/supplier');
const Product = require('./src/models/Product');
const Supplier = require('./src/models/Supplier')

const app = express();

app.use(bodyParser.json());

app.use('/customer',customerRoutes)
app.use('/supplier', supplierRoutes)

Product.belongsTo(Supplier, { constraints: true, onDelete: 'CASCADE' });
Supplier.hasMany(Product);

sequelize
// .sync({ force: true })
.sync()
.then(async()=>{
    console.log('succes connect to postgresql database')
    app.listen(5000, ()=>{
        console.log('server is running on port 5000')
    });
})



module.exports = app