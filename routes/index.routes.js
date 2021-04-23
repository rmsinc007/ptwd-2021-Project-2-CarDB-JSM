const express = require("express");
const router  = express.Router();
const session = require("express-session");
const User   = require("../models/login.model.js");
const bcrypt  = require("bcryptjs");

/*GET home page */
router.get("/", (req, res, next) => {
    //console.log(req.query);
    res.render("login");
});

router.post("/login", async (req, res, next) => {
    console.log("Session", req.session);
    const { email, password } = req.body;
    if (email === "" || password === "") {
      res.render("profile", { errorMessage: "All the fields are mandatory" });
    } else {
      // try {
      //   const userFromDB = await User.find({ email });
      //   console.log(userFromDB);
      // } catch (err) {
      //   next(err);
      // }
      // findOne will return the first match against your query from the DB
      User.find({ email })
        .then((userArrFromDB) => {
            console.log(userArrFromDB)
          //  no user with such email -> show error
          // email matches something => [{ email: dasdas, pass: dsda }]
          // doesn't match => []
          if (userArrFromDB.length === 0) {
            res.render("login", {
              errorMessage: "User does not exist in the DB",
            });
          } else {
            // check if password is correct
            const passwordMatch = bcrypt.compareSync(
              password,
              userArrFromDB[0].password
            );
            if (!passwordMatch) {
              res.render("login", {
                errorMessage: "Auth does not match",
              });
            } else {
            //   userArrFromDB[0].password = "";
            //   req.session.User = userArrFromDB[0];
            //   // find user redirect to profile
              res.render("profile");
            }
          }
        })
        .catch((err) => next(err));
    }
  });
  
  router.get("/logout", (req, res, next) => {
    // req.session.destroy();
    res.redirect("/");
  });



module.exports = router;
