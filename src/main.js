//import {"title"} from './ghibli.js';
// import data from './data/lol/lol.js';
//import data from './data/ghibli/ghibli.js';

import {/*moviePosters,*/ movieTitles} from './data.js';

//console.log(movieTitles);



const MovieTitlesButton = document.getElementById("movieTitlesBtn")
MovieTitlesButton.addEventListener("click", ()=>{
  document.getElementById("movieTitles").innerHTML = movieTitles;
  //document.getElementById("movieTitles").innerHTML = moviePosters;
});

//const MoviePostersButton = document.getElementById("moviePostersBtn")
//MoviePostersButton.addEventListener("click", ()=>{
 // document.getElementById("moviePosters").innerHTML = moviePosters;
//});



//const moviePosters = document.getElementsById("moviePosters").innerHTML = moviePosters;


