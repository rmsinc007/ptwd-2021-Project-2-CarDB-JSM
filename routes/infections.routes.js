const express = require('express');
const router = express.Router();

//route for infections rate
router.get('/infections', (req,res,next)=>{
    res.render('profile');
});

module.exports = router;