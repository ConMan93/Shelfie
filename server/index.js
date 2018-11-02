const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const pc = require('./controllers/productsController');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
const { APP_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then( db => {
    console.log('database is connected')
    app.set('db', db)
}).catch(err => {
    console.log('there was an error', err)
})

app.get('/api/inventory', pc.getProducts)
app.get('/api/product/:id', pc.getProductById)
app.post('/api/product', pc.createProduct)
app.delete('/api/product/:id', pc.deleteProduct)
app.put('/api/product/:id', pc.updateProduct)

app.listen(APP_PORT, () => {
    console.log(`Listening on port ${APP_PORT}`)
})