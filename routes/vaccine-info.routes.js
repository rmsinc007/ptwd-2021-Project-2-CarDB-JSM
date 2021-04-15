const express = require('express');
const router = express.Router();

//route for vaccine-info.hbs
router.get('/vacc-info', (req,res,next)=>{
    res.render("vaccine-info");
});