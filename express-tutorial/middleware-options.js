const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');
// req => middleware => res

// 1. use vs. routes
// 2. options - our own/express/3rd party
// app.use([logger, authorize]); an example of our own middleware
//app.use(express.static('./public')) an example of express middleware
app.use(morgan('tiny')); //morgan is an example of 3rd party middleware

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