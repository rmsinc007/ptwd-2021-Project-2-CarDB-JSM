const newsInput     = document.querySelector('#news-article');
const getNewsButton = document.querySelector('#get-news-button');
const covidNews     = document.querySelector('#news-article');
const articleImage  = document.querySelector('#news-image');
const articleNameH3 = document.querySelector('#article-name-h3');
const articleLink   = document.querySelector('#link');

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
  };
  axios.request(options).then(function (response) {
    // console.log(response.data.news.title);
    // console.log(response[0]);
    const { title, link } = response.data.news[0];
    // [...response.data].forEach((title,index) => {
    //   response.data.news[index].title
    //   console.log(title)
    // })
    // const title = response.data.news[0].title;
    articleNameH3.innerText = title;
    articleLink.href = link; 
    // image.src = image;
    console.log(link)
    res.render("covid-news")
    
  }).catch(function (error) {
    // console.error(error);
  });
});


