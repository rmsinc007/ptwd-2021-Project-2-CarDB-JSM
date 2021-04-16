const express = require('express');
const router = express.Router();

//route for support page
router.get('/support', (req,res,next)=>{
    res.render('support');
});

module.exports = router;