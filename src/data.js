//importar mi bloque gigante de data:
import data from './data/ghibli/ghibli.js';
const dataFilms = data.films;

<<<<<<< HEAD
import {filteredlocations} from './vehiculos.js';
const climateSelect = document.querySelector('#climateSelect');
climateSelect.addEventListener('change', (event) => { 
    filteredlocations();
});

const moviesTable = document.getElementById("moviesTable");
const moviesBody = moviesTable.getElementsByTagName('tbody')[0];
let tableBody = "";
=======
>>>>>>> main

export function filterByMovies(director) {
  const moviesTable = document.getElementById("moviesTable");
  if (!moviesTable) {
    //console.error("moviesTable element not found");
    return;
  }
  const moviesBody = moviesTable.getElementsByTagName('tbody')[0];
  let filteredFilms = dataFilms;

  if (director !== "allDirectors") {
    filteredFilms = dataFilms.filter(movie => movie.director === director);
  }

  let tableBody = "";
  filteredFilms.forEach((movie, index) => {
    if (index % 3 === 0) {
      tableBody = tableBody + "<tr>"
    }
    tableBody = tableBody + "<td>"

    const posterImg = "<img src='" + movie.poster + "' class='moviePoster'/>"
    const movieTitle = "<h3>" + movie.title + "</h3>";
    const director = "<p> Directed by " + movie.director + "</p>";
    const producer = "<p> Produced by " + movie.producer + "</p>";
    const releaseDate = "<p>" + movie.release_date + "</p>";
    const description = "<p class='justify'>" + movie.description + "</p>";

    tableBody = tableBody + posterImg + movieTitle + director + producer + releaseDate + description;
    tableBody = tableBody + "</td>"

    if (index % 3 === 2) {
      tableBody = tableBody + "</tr>";
    }
  });
  moviesBody.innerHTML = tableBody;
}
<<<<<<< HEAD

filterBy("allDirectors");

export function sortMoviesByDate() {
  dataFilms.sort((a, b) => (a.release_date) - (b.release_date));
  filterBy("allDirectors");
} 

export function sortMoviesByTitle() {
  dataFilms.sort((a, b) => (a.title).localeCompare(b.title));
  filterBy("allDirectors");
}
=======
filterByMovies("allDirectors");

export function sortMoviesByDateNewestToOldest() {
  dataFilms.sort((a, b) => (b.release_date) - (a.release_date));
}

export function sortMoviesByDateOldestToNewest() {
  dataFilms.sort((a, b) => (a.release_date) - (b.release_date));
}



/*export function sortMoviesByTitle() {
  dataFilms.sort((a, b) => (a.title).localeCompare(b.title));
}*/

//console.log(new Date);

//dataFilms.forEach(movie => console.log(movie.release_date));
//dataFilms.forEach(movie => console.log(movie.producer));
>>>>>>> main
