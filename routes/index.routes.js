const express = require("express");
const router  = express.Router();

/*GET home page */
router.get("/", (req, res, next) => {
    console.log(req.query);
    res.render("login");
});



module.exports = router;