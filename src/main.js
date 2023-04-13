import {filterByMovies, sortMoviesByDateNewestToOldest, sortMoviesByDateOldestToNewest} from './data.js';
import {filterCharacters, filterCharactersBySpecie, sortCharactersByName} from './characters.js';


const directorSelect = document.getElementById("directorSelect");
if (directorSelect) {
  directorSelect.addEventListener("change", () => {
    filterByMovies(directorSelect.value);
    console.log(directorSelect.value);
  });
}

const sortByDateNOButton = document.getElementById("sortMoviesByDateNewestOldest");
if (sortByDateNOButton) {
  sortByDateNOButton.addEventListener("click", () => {
    filterByMovies(directorSelect.value); 
    sortMoviesByDateNewestToOldest();
  });
}

const sortByDateONButton = document.getElementById("sortMoviesByDateOldestNewest");
if (sortByDateONButton) {
  sortByDateONButton.addEventListener("click", () => {
    filterByMovies(directorSelect.value);
    sortMoviesByDateOldestToNewest();
  });
}

const buttonRefresh = document.getElementById("refresh");
if (buttonRefresh) {
  buttonRefresh.addEventListener("click",()=>{
    history.go(0);
  });
}

const filterGenderSelection = document.getElementById("genderSelect");
if (filterGenderSelection) {
  filterGenderSelection.addEventListener("change", () => {
    filterCharacters(filterGenderSelection.value);
    console.log(filterGenderSelection.value);
  });
}

const filterSpecieSelection = document.getElementById("charactersSpecieSelect");
if (filterSpecieSelection) {
  filterSpecieSelection.addEventListener("change", () => {
    filterCharactersBySpecie(filterSpecieSelection.value);
    console.log(filterSpecieSelection.value);
  });
}

const sortCharactersByNameButton = document.getElementById("sortCharactersByAge");
if (sortCharactersByNameButton) {
  sortCharactersByNameButton.addEventListener("click", () => {
    filterGenderSelection(filterGenderSelection.value) +filterSpecieSelection(filterSpecieSelection.value);
    sortCharactersByName();
  });
}

import {filteredlocations} from './vehiculos.js';
const climateSelect = document.querySelector('#climateSelect');
climateSelect.addEventListener("change", () => {
  filteredlocations();
});