let modernaCounter = 0;
let linkIndex = 0;

const getDeveloperResearcher = (arrObj) =>{
    
    const urlLinks = [
        "https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/moderna-covid-19-vaccine",
        "https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/janssen-covid-19-vaccine",
        "https://www.cdc.gov/vaccines/acip/meetings/downloads/slides-2021-01/02-COVID-Villafana.pdf",
        "https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/pfizer-biontech-covid-19-vaccine"
    ]
    const arrVaccines = [];
    
    arrObj.forEach( elem => {
        let vaccine = {};
        //console.log(elem);
        const vaccName = getNameDelimited(elem.developerResearcher)
        console.log(vaccName);

        if(vaccName === "Moderna" && modernaCounter < 1){

            vaccine.name = vaccName;
            vaccine.url = urlLinks[linkIndex];
            arrVaccines.push(vaccine);
            modernaCounter++;
            linkIndex++;

        }
        else if(!(vaccName === "Moderna")){
            vaccine.name = vaccName;
            vaccine.url = urlLinks[linkIndex];
            arrVaccines.push(vaccine);
            linkIndex++;
        }
        //console.log(arrVaccines);

    });
    
    console.log(arrVaccines);

    return arrVaccines;

}

//Helper method/function
//Returns the name of the vaccine
const getNameDelimited = (name)=>{
    
    if(name.split('/')[0] === "University of Oxford, Oxford Biomedica, … [+187]"){
        return "AstraZeneca"
    }
    else if(name.split('/')[0] === "BioNTech"){
        return "Pfizer"
    }
    return name.split('/')[0]
}

exports.getDeveloperResearcher = getDeveloperResearcher;