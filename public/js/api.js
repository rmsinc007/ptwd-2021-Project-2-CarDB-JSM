const newsInput     = document.querySelector('#news-article');
const getNewsButton = document.querySelector('#get-news-button');
const covidNews     = document.querySelector('#news-article');
const articleImage  = document.querySelector('#news-image');
const articleNameH3   = document.querySelector('#article-name-h3');

// NEWS API KEY 
const options = {
  method: 'GET',
  url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0',
  headers: {
    'x-rapidapi-key': 'a678a8a890msh7a3034aee5fcb2fp167021jsn4cccf885c45e',
    'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
  }
};


axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

getNewsButton.addEventListener( "click", () => {
  console.log("click");
  const newsArticle = newsInput.value;
  const options = {
    method: 'GET',
    url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0`,
    headers: {
      'x-rapidapi-key': 'a678a8a890msh7a3034aee5fcb2fp167021jsn4cccf885c45e',
      'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
    // .then((response)=> {
    //   console.log(response[0]);
    //   const { title, image } = response.data[0];
    //   articleNameH3.innerHTML = title ;
    //   image.src = image;
    // })
    
  };
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
});


