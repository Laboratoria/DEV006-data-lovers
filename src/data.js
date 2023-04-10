//importar mi bloque gigante de data:
import data from './data/ghibli/ghibli.js';
const dataFilms = data.films;

const moviesTable = document.getElementById("moviesTable");
const moviesBody = moviesTable.getElementsByTagName('tbody')[0];
let tableBody = "";

export function filterBy(director){
  let filteredFilms = dataFilms;
  const chosenDirector = document.getElementById("directorSelect").value;
  console.log(chosenDirector);

  if (director !== "allDirectors"){
    filteredFilms = dataFilms.filter(movie => movie.director === chosenDirector);
  } 

  tableBody="";
  filteredFilms.forEach((movie, index) => {
    if (index % 3 === 0) {
      tableBody = tableBody + "<tr>"
    }
    tableBody = tableBody + "<td>"

    const posterImg = "<img src='" + movie.poster +"' class='moviePoster'/>"
    const movieTitle = "<h3>" + movie.title + "</h3>";
    const director = "<p> Director: " + movie.director + "</p>";
    const releaseDate = "<p>" + movie.release_date + "</p>";
    const description = "<p class='justify'>" + movie.description + "</p>";
    

    tableBody = tableBody + posterImg + movieTitle + director + releaseDate + description;
    tableBody = tableBody + "</td>"

    if(index % 3 === 2) {
      tableBody = tableBody + "</tr>";
    }
  });
  moviesBody.innerHTML = tableBody;
}
filterBy("allDirectors");

export function sortMoviesByDate() {
  dataFilms.sort((a, b) => (a.release_date) - (b.release_date));
  filterBy("allDirectors");
} 

export function sortMoviesByTitle() {
  dataFilms.sort((a, b) => (a.title).localeCompare(b.title));
  filterBy("allDirectors");
}

console.log(new Date);

dataFilms.forEach(movie => console.log(movie.release_date));
dataFilms.forEach(movie => console.log(movie.producer));
