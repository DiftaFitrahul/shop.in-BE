const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/utils/database')

const app = express();

app.use(bodyParser.json());

sequelize.sync().then(async()=>{
    console.log('succes connect to postgresql database')
    app.listen(5000, ()=>{
        console.log('server is running on port 5000')
    });
})



module.exports = app