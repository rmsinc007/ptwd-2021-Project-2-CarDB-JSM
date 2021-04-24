const express = require('express');
const router = express.Router();

//route for homepage
router.get('/', (req, res, next)=>{

    res.render('home');

});

module.exports = router;