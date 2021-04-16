const express = require('express');
const router = express.Router();

//route for news feed
router.get('/news', (req,res,next)=>{
    res.render('covid-news');
});

module.exports = router;