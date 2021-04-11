const express = require("express");
const router = express.Router();
const User = require('./models/User-model');

//Routes
app.get('/', (req,res) =>{

    res.render('login');
    console.log('logging in');

});

app.get('/add', (req, res) =>{

    res.render("signup");
    console.log('Add car!');
});

app.get('/signup', (req, res) =>{

    res.render("signup");
    console.log('Sign UP!');
});