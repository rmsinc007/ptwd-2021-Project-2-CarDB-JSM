const nhtsa = require('nhtsa');

// Example using async/await
(async () => {
    const { data } = await nhtsa.decodeVin('WUAAU34248N006164');
   
    console.log(data);
  })();

class NHTSA {
    static get URL_BASE() {
      return 'https://vpic.nhtsa.dot.gov/api/vehicles';
    }

  
  
  
  
  
  
    app.get('/cars',  (req, res) => {
    carAPI
    .getCars()
    .then(carsFromApi => {
     res.render('cars', {carList: carsFromApi}); 
    })
    .catch(error => console.log(error));
 });