const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

app.set('views engine', 'hbs');
app.set(path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));

app.listen(3000, ()=>console.log('🏃‍ on port 3000'));

