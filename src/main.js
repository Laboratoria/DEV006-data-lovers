//import {"title"} from './ghibli.js';
// import data from './data/lol/lol.js';
//import data from './data/ghibli/ghibli.js';

import {result} from './data.js';

console.log(result);



const MovieTitlesButton = document.getElementById("movieTitlesBtn")
MovieTitlesButton.addEventListener("click", ()=>{
  document.getElementById("result").innerHTML = result;
});

