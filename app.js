const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const cookieParser = require('cookie-parser');

//User authentication
const router = require('express').Router();

//Handles password encryption
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

//How many rounds should bcrypt run the salt
const saltRounds = 10;

//Require the User model in order to interact with the DB
const User = require('./models/User-model');

//Require the Post model
const Post = require('./models/Posts.model');

// Require necessary middlewares in order to control access to specific routes
const shouldNotBeLoggedIn = require("./middlewares/shouldNotBeLoggedIn");
const isLoggedIn = require("./middlewares/isLoggedIn");

//needed middleware to communicate with POST requests
const bodyParser = require('body-parser');
//Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//we may also want to consider express-validator

// Set covidPosts db
require('./covidPosts-db');

//Routes
// const posts = require('./routes/posts.routes');
// app.use('/',posts);

const index = require('./routes/index.routes');
app.use('/',index);

const vaccInfo = require('./routes/vacc-Info.routes');
app.use('/',vaccInfo);

const infections = require('./routes/infections.routes');
app.use('/', infections);

const news = require('./routes/covid-news.routes');
app.use('/', news);

const support = require('./routes/support.routes');
app.use('/', support);

const signup = require('./routes/signup.routes');
app.use('/', signup);

const userPost = require('./routes/posts.routes');
app.use('/', userPost);

const homeRoute = require('./routes/home.routes');
app.use('/', homeRoute);
  
router.get("/login", shouldNotBeLoggedIn, (req, res) => {
  res.render("auth/login");
});


/*Sign Up Page*/
router.get('/signup', shouldNotBeLoggedIn, (req, res) => {
  res.render('auth/signupaccount');
});

router.post("/signup", shouldNotBeLoggedIn, (req, res) => {
  const { username, password } = req.body;
  
  if (!username) {
    return res
      .status(400)
      .render("auth/signupaccount", { errorMessage: "Please provide your username." });
  }
  
  if (password.length < 8) {
    return res.status(400).render("auth/signupaccount", {
      errorMessage: "Your password needs to be at least 8 characters long.",
    });
  }
  
  // Search the DB for a user with the username submitted in the form
  User.findOne({ username }).then((found) => {
    // If the user is found, send the message username is taken
    if (found) {
      return res
        .status(400)
        .render("auth/signupaccount", { errorMessage: "Username already taken." });
    }
  
    // if user is not found, create a new user - start with hashing the password
    return bcrypt
      .genSalt(saltRounds)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hashedPassword) => {
        // Create a user and save it in the database
        return User.create({
          username,
          password: hashedPassword,
        });
      })
      .then((user) => {
        // Bind the user to the session object
        req.session.user = user;
        res.redirect("/");
      })
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
          return res
            .status(400)
            .render("auth/signupaccount", { errorMessage: error.message });
        }
        if (error.code === 11000) {
          return res.status(400).render("auth/signupaccount", {
            errorMessage:
              "Username needs to be unique. The username you chose is already in use.",
          });
        }
        return res
          .status(500)
          .render("auth/signupaccount", { errorMessage: error.message });
      });
  });
});


router.post("/login", shouldNotBeLoggedIn, (req, res, next) => {
  const { username, password } = req.body;
  
  if (!username) {
    return res
      .status(400)
      .render("auth/login", { errorMessage: "Please provide your username." });
  }
  
  // Here we use the same logic as above
  // - either length based parameters or we check the strength of a password
  if (password.length < 8) {
    return res.status(400).render("auth/login", {
      errorMessage: "Your password needs to be at least 8 characters long.",
    });
  }
  
  // Search the database for a user with the username submitted in the form
  User.findOne({ username })
    .then((user) => {
      // If the user isn't found, send the message that user provided wrong credentials
      if (!user) {
        return res
          .status(400)
          .render("auth/login", { errorMessage: "Wrong credentials." });
      }
  
      // If user is found based on the username, check if the inputted password matches the one saved in the database
      bcrypt.compare(password, user.password).then((isSamePassword) => {
        if (!isSamePassword) {
          return res
            .status(400)
            .render("auth/login", { errorMessage: "Wrong credentials." });
        }
        req.session.user = user;
        // req.session.user = user._id; // ! better and safer but in this case we are saving the entire user object
        return res.redirect("/");
      });
    })
  
    .catch((err) => {
      // in this case we are sending the error handling to the error handling middleware that is defined in the error handling file
      // you can just as easily run the res.status that is commented out below
      next(err);
      // return res.status(500).render("auth/login", { errorMessage: err.message });
    });
});
  
router.get("/logout", isLoggedIn, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res
        .status(500)
        .render("auth/logout", { errorMessage: err.message });
    }
    res.redirect("/");
  });
});


module.exports = router;
//end of authorization


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));



let port = process.env.PORT || 3000 ;

app.listen(port, ()=>console.log('🏃‍ on port 3000'));

