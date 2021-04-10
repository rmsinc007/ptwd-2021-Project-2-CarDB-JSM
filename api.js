const nhtsa = require('nhtsa');

// GET Request.
fetch('https://vpic.nhtsa.dot.gov/api/vehicles')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors

    