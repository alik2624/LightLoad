const express = require('express');
const app = new express();
const register = require('./routes/register');

app.use(express.json());
app.use('/register',register);


const port = process.env.PORT || 3000;
app.listen(port,() => {console.log(`I Am Listening On Port ${port}`)});