//importar mi bloque gigante de data:
import data from './data/ghibli/ghibli.js';

//console.log(data.films[022].locations[022].name);

//obtener el título de la película con un filter y luego reubicarlo con un map:
const dataFilms = data.films;
export const movieTitles = dataFilms.forEach(film =>
  film.title);
//export const movieTitles = dataFilms.filter(movie => movie.title).map(movie => movie.title);

//no funciona con el método map porque LOCATIONS es otro arreglo!!!
export const movieLocations = dataFilms.filter(movie => movie.locations).map(movie => movie.locations).map(locations => locations.name);
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


const moviesTable = document.getElementById("moviesTable");
const columnOne = document.getElementById("moviesTableColumnOne");
const columnTwo = document.getElementById("moviesTableColumnTwo");

dataFilms.forEach((movie, index) => {
  const tableRow = document.createElement("tr");
  const posterCell = document.createElement("td");
  const posterImg = document.createElement("img");
  posterImg.src = movie.poster;
  posterImg.classList.add("moviePoster");
  posterCell.appendChild(posterImg);
  if (index % 2 === 0) {
    columnOne.appendChild(posterImg);
  } else {
    columnTwo.appendChild(posterImg);
  }

  const infoCell = document.createElement("td");

  const movieTitle = document.createElement("h3");
  movieTitle.textContent = movie.title;
  infoCell.appendChild(movieTitle);
  if (index % 2 === 0) {
    columnOne.appendChild(movieTitle);
  } else {
    columnTwo.appendChild(movieTitle);
  }

  const releaseDate = document.createElement("p");
  releaseDate.textContent = movie.release_date;
  infoCell.appendChild(releaseDate);
  if (index % 2 === 0) {
    columnOne.appendChild(releaseDate);
  } else {
    columnTwo.appendChild(releaseDate);
  }

  const movieInfo = document.createElement("p");
  movieInfo.textContent = movie.description;
  infoCell.appendChild(movieInfo);
  if (index % 2 === 0) {
    columnOne.appendChild(movieInfo);
  } else {
    columnTwo.appendChild(movieInfo);
  }

  const movieDirector = document.createElement("p");
  movieDirector.textContent = "Director: " + movie.director;
  infoCell.appendChild(movieDirector);
  if (index % 2 === 0) {
    columnOne.appendChild(movieDirector);
  } else {
    columnTwo.appendChild(movieDirector);
  }

  tableRow.appendChild(posterCell);
  tableRow.appendChild(infoCell);
  moviesTable.appendChild(tableRow);

});
  


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







