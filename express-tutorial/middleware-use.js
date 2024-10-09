const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
// req => middleware => res

// 1. use vs. route
// 2. options - our own/express/3rd party
app.use([logger, authorize]);

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about',  (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    res.send('Items')
})

app.listen(8000, () => {
    console.log('Server is listening on Port: 8000')
})