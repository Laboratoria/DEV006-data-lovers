import main from './data.js';
// import data from './data/lol/lol.js';
import data from './data/athletes/athletes.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(main, data);

const btnView = document.getElementById("btnExplorar");
btnView.addEventListener("click", function(e){ //e => event
  e.preventDefault();//Evitar que se recargue la página al tiro

});



