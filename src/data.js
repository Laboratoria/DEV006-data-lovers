//importar mi bloque gigante de data:
import data from "./data/ghibli/ghibli.js";

//console.log(data.films[022].locations[022].name);

//obtener el título de la película con un filter y luego reubicarlo con un map:
const dataFilms = data.films;
export const movieTitles = dataFilms.forEach((film) => film.title);
//export const movieTitles = dataFilms.filter(movie => movie.title).map(movie => movie.title);

//no funciona con el método map porque LOCATIONS es otro arreglo!!!
export const movieLocations = dataFilms
  .filter((movie) => movie.locations)
  .map((movie) => movie.locations)
  .map((locations) => locations.name);
console.log(movieLocations);
//por eso necesito el método forEach, para recorrer este sub-array y lograr iterarlo también

//aquí lo que estoy diciendo es: te doy un parámetro llamado FILM, para cada vez que iteres en ese parámetro dentro de mi arreglo, vas a imprimir
//el póster que encuentres
/*dataFilms.forEach(film =>
  console.log(film.poster));

dataFilms.forEach(film =>
  console.log(film.rt_score)); */

 
/*aquí le estoy diciendo: te doy el parámetro FILM, cada vez que iteres en ese parámetro, entra al sub-arreglo PEOPLE y ahí vas a iterar ese arreglo
con el parámetro PERSON, entonces quiero que para cada una de esas iteraciones dentro de PEOPLE, me des la imagen, o el nombre, o la edad, o lo que
yo quiera 
del personaje*/
dataFilms.forEach((movie) => {
  movie.people.forEach((person) => {
    console.log(person.age); //aquí le agrego a mi parámetro person lo que quiero recibir de este arreglo: img, name, age...
  });
});

//dataFilms.forEach((film) => {
//film.locations.forEach((place) => {
//console.log(place.name);
//})
//})


//   const infoCell = document.createElement("td");
//   const movieTitle = document.createElement("h3");
//   movieTitle.textContent = movie.title;
//   infoCell.appendChild(movieTitle);

//   const releaseDate = document.createElement("p");
//   releaseDate.textContent = movie.release_date;
//   infoCell.appendChild(releaseDate);

//   const movieInfo = document.createElement("p");
//   movieInfo.textContent = movie.description;
//   infoCell.appendChild(movieInfo);

//   const movieDirector = document.createElement("p");
//   movieDirector.textContent = "Director: " + movie.director;
//   infoCell.appendChild(movieDirector);

//   tableRow.appendChild(posterCell);
//   tableRow.appendChild(infoCell);

//    if (index % 2 === 0) {
//     tableRow = document.createElement("tr");
//     moviesTable.appendChild(tableRow);
//   }
// });

let tableBody = "";

dataFilms.forEach((movie, index) => {
  if (index % 3 === 0) {
    tableBody = tableBody + "<tr>"
  }

  tableBody = tableBody + "<td>"

  const posterImg = "<img src='" + movie.poster +"' class='moviePoster'/>"
  const movieTitle = "<h3>" + movie.title + "</h3>";
  const releaseDate = "<p>" + movie.release_date + "</p>";
  const description = "<p class='justify'>" + movie.description + "</p>";
  const director = "<p>" + movie.director + "</p>";

  tableBody = tableBody + posterImg + movieTitle + releaseDate + description + director;
  
  tableBody = tableBody + "</td>"

  if(index % 3 === 2) {
    tableBody = tableBody + "</tr>";
  }
});

moviesBody.insertAdjacentHTML('afterbegin', tableBody);

buildTable = (movies);

function filterItems(query) {
  return director.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

 



let filterByDirector = movies.filterByDirector(movie => movie.dire.toloweCase().includes(busqueda.toloweCase()));

/*const titleContainer = document.getElementById("titleContainer");
dataFilms.forEach(movie => {
  const title = document.createElement("table");
  title.textContent = movie.title;
  titleContainer.appendChild(title);
});


export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

//console.log("films", data.films[1]);







