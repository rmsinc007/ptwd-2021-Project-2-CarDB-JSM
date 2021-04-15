

fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-fda-approved-vaccines", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a678a8a890msh7a3034aee5fcb2fp167021jsn4cccf885c45e",
		"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});