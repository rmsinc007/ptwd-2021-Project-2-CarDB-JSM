const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

app.set('views engine', 'hbs');
app.set(path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));


//Routes
app.get('/', (req,res) =>{

    console.log('Hello World');

});

app.get('/add', (req, res) =>{
    console.log('Add car!');
});

app.listen(3000, ()=>console.log('🏃‍ on port 3000'));

