const express = require("express");
const router  = express.Router();
// const Login   = require(".models/login.model.js");
const bcrypt  = require("bcryptjs");

//route for support page
router.get('/signup', (req,res,next)=>{
    res.render('signup');
});

router.post('/signup',(req, res, next) => {
    const {email, password} = req.body;
    if (email === "" || password === "") {
      console.log({ email,password });
      res.render("signup", {errorMessage: 'All the fields are mandatory'});
    } else {
      const hashedPassword = bcrypt.hashSync(password, 10);
      Login.create({ email, password: hashedPassword })
        .then((userFromDB) => {
          res.render('profile');
        })
        .catch((err) => {
          if (err.code === 11000) {
              res.render("signup" , { 
                  errorMessage: 'user with that email already exists',
              });
          }  else {
             next(err);
          }
      });
    }
});

module.exports = router;