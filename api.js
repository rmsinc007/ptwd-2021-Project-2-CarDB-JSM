//const { default: axios } = require("axios");

const newsInput     = document.querySelector('#news-article');
const getNewsButton = document.querySelector('#get-news-button');
const covidNews     = document.querySelector('#news-article');

import axios from "axios";

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
  axios
    .get(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/${newsArticle}`)
    .then((responseFromAPI) => {
        console.log(responseFromAPI.data[0]);
        const {name, article } = responseFromAPI.data[0];
    });
});