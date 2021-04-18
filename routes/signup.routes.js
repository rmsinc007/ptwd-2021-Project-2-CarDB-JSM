const express = require('express');
const router = express.Router();

//route for support page
router.get('/signup', (req,res,next)=>{
    res.render('signup');
});


module.exports = router;