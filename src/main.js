
import {filterBy, sortByDate, sortByTitle} from './data.js';

const directorSelect = document.getElementById("directorSelect");
directorSelect.addEventListener("change", () => {
  filterBy(directorSelect.value);
  console.log(directorSelect.value);
});

const sortByDateButton = document.getElementById("sortByDate")
sortByDateButton.addEventListener("click", () => { 
  sortByDate();
});

const sortByTitleButton = document.getElementById("sortByTitle")
sortByTitleButton.addEventListener("click", () => { 
  sortByTitle();
});

const buttonRefresh = document.getElementById("refresh")
buttonRefresh.addEventListener("click",()=>{
  history.go(0);
});
