const express = require('express');
const router = express.Router();
const Post = require('../models/Posts.model');

//route for posts

// CREATE
router.post("/post", (req, res, next) => {
  Post.create({
    title: req.body.title,
    url: req.body.url,
    summary: req.body.summary
  }).then(() => {
    const sucessMessage = {message: "You have posted successfully!"}
    res.redirect('/post');
  }).catch((err) => {
    console.log(err);
  });
});

router.get('/post', (req, res, next) => {
  Post.find().then((bunchaPosts) => {
    console.log(bunchaPosts)
    res.render('profile', { posts: bunchaPosts });
  });
});

  
  console.log("Post route worked");
  
  


module.exports = router;

// INSTANTIATE INSTANCE OF POST MODEL
/* const post = new Post(req.body);

// SAVE INSTANCE OF POST MODEL TO DB
post.save((err, post) => {
// REDIRECT TO THE ROOT
return res.redirect(`/`);
}); */