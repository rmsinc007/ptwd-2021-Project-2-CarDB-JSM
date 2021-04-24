const express = require('express');
const router = express.Router();
const Post = require('../models/Posts.model');
//const Popup = require('popups');

//route for posts

// CREATE
router.post("/post", (req, res, next) => {
  Post.create({
    title: req.body.title,
    url: req.body.url,
    summary: req.body.summary
  }).then(() => {
    //Popup.alert({ content: 'You have successfully posted!'})
    res.redirect('/post');
  }).catch((err) => {
    console.log(err);
  });
});

router.get('/post', (req, res, next) => {
  Post.find().then((bunchaPosts) => {
    console.log(bunchaPosts)
    res.render('post-history', bunchaPosts);  //{ posts: bunchaPosts }
  });
});

//DELETE
router.post('/delete-post/:idofpost', (req, res, next) => {
  const id = req.params.idofpost;
  Post.findByIdAndDelete(id)
    .then(() => {
      console.log('success');
      res.redirect('/post');
    })
    .catch((err) => {
      console.log('error', err);
    });
});


//EDIT or UPDATE
router.get('/post/:id/edit', (req, res, next)=>{
  Post.findById(req.params.id)
  .then((postFromDB)=>{
      res.render('edit-post', {thePost: postFromDB});
  })
  .catch((err)=>{
      console.log(err);
  })
});

router.post('/update-post/:id', (req, res, next)=>{
 Post.findByIdAndUpdate(req.params.id, {
  title: req.body.title,
  url: req.body.url,
  summary: req.body.summary
 }).then((blah)=>{
     res.redirect(`/post/${req.params.id}`);
 })
 .catch((err)=>{
  console.log(err);
 })
})
  
console.log("Post route worked");
  
  

module.exports = router;
