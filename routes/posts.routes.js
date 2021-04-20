const express = require('express');
const router = express.Router();
const Post = require('.models/Posts.model');

//route for posts
module.exports = app => {
    // CREATE
    app.post("/posts/new", (req, res) => {
      // INSTANTIATE INSTANCE OF POST MODEL
    const post = new Post(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB
    post.save((err, post) => {
      // REDIRECT TO THE ROOT
      return res.redirect(`/`);
    });
  });

};
   