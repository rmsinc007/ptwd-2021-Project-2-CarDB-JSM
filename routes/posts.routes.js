const express = require('express');
const router = express.Router();
const Post = require('../models/Posts.model');

//route for posts

// CREATE
router.post("/post", (req, res) => {
      // INSTANTIATE INSTANCE OF POST MODEL
    /* const post = new Post(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB
    post.save((err, post) => {
      // REDIRECT TO THE ROOT
      return res.redirect(`/`);
    }); */
    console.log("Post route worked");
    

});

module.exports = router;
   