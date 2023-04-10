
import {filterBy, sortMoviesByDate, sortMoviesByTitle} from './data.js';

const directorSelect = document.getElementById("directorSelect");
directorSelect.addEventListener("change", () => {
  filterBy(directorSelect.value);
  console.log(directorSelect.value);
});

const sortByDateButton = document.getElementById("sortMoviesByDateID");
sortByDateButton.addEventListener("click", sortMoviesByDate);

const sortByTitleButton = document.getElementById("sortMoviesByTitleID")
sortByTitleButton.addEventListener("click", () => { 
  sortMoviesByTitle();
});

const buttonRefresh = document.getElementById("refresh")
buttonRefresh.addEventListener("click",()=>{
  history.go(0);
});
