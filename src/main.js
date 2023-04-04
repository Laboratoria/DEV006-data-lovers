//import {"title"} from './ghibli.js';
// import data from './data/lol/lol.js';
//import data from './data/ghibli/ghibli.js';

import {filterBy} from './data.js';

//console.log(movieTitles);


const directorSelect = document.getElementById("directorSelect");
directorSelect.addEventListener("change", () => {
  filterBy(directorSelect.value);
  console.log(directorSelect.value);
});




//const MoviePostersButton = document.getElementById("moviePostersBtn")
//MoviePostersButton.addEventListener("click", ()=>{
// document.getElementById("moviePosters").innerHTML = moviePosters;
//});



//const moviePosters = document.getElementsById("moviePosters").innerHTML = moviePosters;


