const express = require('express');
const router = express.Router();
const Post = require('../models/Posts.model');

//route for posts

// CREATE
router.post("/post", (req, res, next) => {
  Post.create({
    title: req.body.postTitle,
    // url: req.body.postUrl,
    // summary: req.body.summaryContent
  }).then(() => {
    res.redirect('/profile');
  }).catch((err) => {
    console.log(err);
  });
});

// app.post('/delete-cat/:idofcat', (req, res, next) => {
//   const id = req.params.idofcat;
//   Cat.findByIdAndDelete(id)
//     .then(() => {
//       console.log('success');
//       res.redirect('/cats');
//     })
//     .catch((err) => {
//       console.log('error', err);
//     });
// });

  
  console.log("Post route worked");
  
  


module.exports = router;

// INSTANTIATE INSTANCE OF POST MODEL
/* const post = new Post(req.body);

// SAVE INSTANCE OF POST MODEL TO DB
post.save((err, post) => {
// REDIRECT TO THE ROOT
return res.redirect(`/`);
}); */