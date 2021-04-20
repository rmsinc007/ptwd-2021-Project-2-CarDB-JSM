const express = require('express');
const router = express.Router();

//route for vaccine-info.hbs
router.get('/vacc-info', (req,res,next)=>{

    var axios = require("axios").default;

    var options = {
        method: 'GET',
        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-fda-approved-vaccines',
        headers: {
            'x-rapidapi-key': '3f31b47feamsh0d7be2a6902d9ffp1512fdjsna65400b39c6c',
            'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
    };

    axios.request(options).then( vaccineData => {
        console.log(vaccineData.data);
        res.render("vaccine-info", vaccineData.data);
    }).catch(function (error) {
        console.error(error);
    });

});

module.exports = router;