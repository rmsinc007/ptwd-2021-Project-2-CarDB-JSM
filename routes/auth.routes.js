const express = require("express");
const router  = express.Router();
const Login   = require(".models/login.model");
const bcrypt  = require("bcryptjs");

router.get("/signup", (req, res, next) => {
    res.render("auth/signup");
});

router.post('/signup',(req, res, next) => {
    const {email, passord} = req.body;
    if(email === "" || password === "") {
        res.render("/signup");
    } else {
      const hashedPassword = bcrypt.hashSync(password, 10);
      Login.create({ email, password: hashedPassword }).then((userFromDB) => {
         console.log(userFromDB);
      });
    }
});

module.exports = router;