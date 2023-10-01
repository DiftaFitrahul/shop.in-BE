const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/utils/database');
const customerRoutes = require('./src/routes/customer');
const supplierRoutes = require('./src/routes/supplier');

const app = express();

app.use(bodyParser.json());

app.use('/customer',customerRoutes)
app.use('/supplier', supplierRoutes)

sequelize.sync().then(async()=>{
    console.log('succes connect to postgresql database')
    app.listen(5000, ()=>{
        console.log('server is running on port 5000')
    });
})



module.exports = app