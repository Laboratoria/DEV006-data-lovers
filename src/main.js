import {filterByMovies, sortMoviesByDateNewestToOldest, sortMoviesByDateOldestToNewest, filterCharactersBySpeciesAndGender, filterLocationsByClimate} from './data.js';

const directorSelect = document.getElementById("directorSelect");
if (directorSelect) {
  directorSelect.addEventListener("change", () => {
    filterByMovies(directorSelect.value);
    //console.log(directorSelect.value);
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

const genderSelect = document.getElementById("genderSelect");
if (genderSelect) {
  genderSelect.addEventListener("change", () => {
    const genderSelection = genderSelect.value;
    const specieSelection = document.getElementById("charactersSpecieSelect").value;
    filterCharactersBySpeciesAndGender(specieSelection, genderSelection);
  });
}

const specieSelect = document.getElementById("charactersSpecieSelect");
if (specieSelect) {
  specieSelect.addEventListener("change", () => {
    const specieSelection = specieSelect.value;
    const genderSelection = document.getElementById("genderSelect").value;
    filterCharactersBySpeciesAndGender(specieSelection, genderSelection);
  });
}

const climateSelect = document.getElementById("climateSelect");
if (climateSelect) {
  climateSelect.addEventListener("change", () => {
    const climateSelection = climateSelect.value;
    filterLocationsByClimate(climateSelection);
  });
}

function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.classList.add("modal-open");
}
// close currently open modal
function closeModal() {
  document.querySelector(".modal").classList.remove('open');
  document.body.classList.remove("modal-open");
}
window.addEventListener("load", function() {
// close modas on background click
  document.querySelector(".close-modal").addEventListener("click", () => {
    closeModal();
  });
  document.getElementById("1a").addEventListener("click", () => {
    openModal("history-modal");
  });
});

function openModale(id) {
  document.getElementById(id).classList.add("open");
  document.body.classList.add("modal-open");
}
function closeModale(id) {
  document.getElementById(id).classList.remove("open");
  document.body.classList.remove("modal-open");
}
window.addEventListener("load", function () {
  const btnsClose = document.querySelectorAll(".close-modal");
  btnsClose.forEach((btn) => {
    btn.addEventListener("click", function() {
      closeModale(btn?.parentElement?.parentElement?.id)
    });
  });
  const btnModals = document.querySelectorAll(".btn-modal");
  btnModals.forEach((btn) => {
    btn.addEventListener("click", function () {
      openModale(btn.getAttribute("modal"))
    });
  });
});