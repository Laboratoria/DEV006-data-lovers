//import {"title"} from './ghibli.js';
// import data from './data/lol/lol.js';
//import data from './data/ghibli/ghibli.js';

import {movieTitles} from './data.js';

//console.log(movieTitles);



const MovieTitlesButton = document.getElementById("movieTitlesBtn")
MovieTitlesButton.addEventListener("click", ()=>{
  document.getElementById("movieTitles").innerHTML = movieTitles;
});


