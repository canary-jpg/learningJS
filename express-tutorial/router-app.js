const express = require('express');
const app = express();
let { people } = require('./data');
const peopleRouter = require('./routes/people')
const authRouter = require('./routes/auth');
// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({extended: false}));
//parse json data
app.use(express.json());

//accessing the people routes
app.use('/api/people', peopleRouter)

//accesing the auth route
app.use('/login', authRouter);




app.listen(8000, () => {
    console.log('Server is listening on Port: 8000')
})