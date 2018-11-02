const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const pc = require('./controllers/productsController');
require('dotenv').config();

const app = express();
const { APP_PORT, CONNECTION_STRING } = process.env;
app.use(bodyParser.json());

massive(CONNECTION_STRING).then( db => {
    console.log('database is connected')
    app.set('db', db)
}).catch(err => {
    console.log('there was an error', err)
})

app.listen(APP_PORT, () => {
    console.log(`Listening on port ${APP_PORT}`)
})