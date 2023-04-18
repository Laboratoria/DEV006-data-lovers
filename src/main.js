import { filterDirector, sortDataYear, filterProducer, filterSpecies, characterMovie, functionSortAZ } from './data.js';
import data from './data/ghibli/ghibli.js';

const movies = document.getElementById("movies");
const filterSection = document.getElementById("filterSection");
//const filmsZone = document.getElementById("filmsZone")
const directores = document.getElementById("Directores");
const productores = document.getElementById("Productores");
const añoDeEstreno = document.getElementById("añoDeEstreno");
const more = document.getElementById("more");
const characters = document.getElementById("characters");
const especie = document.getElementById("Especie");
const characterMovies = document.getElementById("characterMovies");
const sortAZ = document.getElementById("sortAZ");
const trivia = document.getElementById("trivia");


movies.addEventListener("click", function () {
  document.getElementById("homeHeader").style.display = "none";
  document.getElementById("home-Content").style.display = "none";
  document.getElementById("filmsZone").style.display = "flex";
  document.getElementById("content").style.display = "flex";
  document.getElementById("moreSection").style.display = "none";
  document.getElementById("buttonZone").style.display = "none";
  document.getElementById("moreHeader").style.display = "none";
  document.getElementById("movieHeaderSection").style.display = "flex";
  document.getElementById("charactersZone").style.display = "none";
})

more.addEventListener("click", function () {
  document.getElementById("homeHeader").style.display = "none";
  document.getElementById("filmsZone").style.display = "none";
  document.getElementById("home-Content").style.display = "none";
  document.getElementById("content").style.display = "none";
  document.getElementById("movieHeaderSection").style.display = "none";
  document.getElementById("moreHeader").style.display = "flex";
  document.getElementById("moreSection").style.display = "flex";
  document.getElementById("charactersZone").style.display = "none";
})

characters.addEventListener("click", function () {
  document.getElementById("homeHeader").style.display = "none";
  document.getElementById("home-Content").style.display = "none";
  document.getElementById("filmsZone").style.display = "none";
  document.getElementById("content").style.display = "none";
  document.getElementById("moreSection").style.display = "none";
  document.getElementById("buttonZone").style.display = "none";
  document.getElementById("moreHeader").style.display = "none";
  document.getElementById("movieHeaderSection").style.display = "none";
  document.getElementById("characterHeaderSection").style.display = "flex";
  document.getElementById("characterContent").style.display = "flex";
  document.getElementById("charactersZone").style.display = "flex";

})



trivia.addEventListener("click", function () {  
  const peopleMap = data.films.flatMap(element => element.people);
  const genderF = peopleMap.filter (people => people.gender === "Female");
  const femalePercent = ((genderF.length * 100) / peopleMap.length); 

  const genderM = peopleMap.filter (people => people.gender === "Male");
  const malePercent = ((genderM.length * 100) / peopleMap.length) 

  const genderNA = peopleMap.filter (people => people.gender === "NA")
  const naPercent = ((genderNA.length * 100) / peopleMap.length) 

  const genderUnknown = peopleMap.filter (people => people.gender === "Unknown (Possible Male)")
  const unknownPercent = ((genderUnknown.length * 100) / peopleMap.length) 

  console.log(Math.round(femalePercent), Math.round(malePercent), Math.round(naPercent), Math.round(unknownPercent))

  document.getElementById("homeHeader").style.display = "none";
  document.getElementById("filmsZone").style.display = "none";
  document.getElementById("home-Content").style.display = "none";
  document.getElementById("content").style.display = "none";
  document.getElementById("movieHeaderSection").style.display = "none";
  document.getElementById("moreHeader").style.display = "none";
  document.getElementById("moreSection").style.display = "none";
  document.getElementById("charactersZone").style.display = "none";
  document.getElementById("triviaSection").style.display = "flex";
  document.getElementById("triviaHeader").style.display = "flex";
  
})


//constructor de objetos para seleccionar datos a mostrar
class titleAndPoster {
  constructor(title, poster, director, release_date, rt_score) {
    //"this" indica el objeto en concreto que se utilizará (o algo así)
    this.poster = createImage(poster);
    this.title = createText("Title: " + "'" + title + "'");
    this.director = createText("Director: " + director);
    this.release_date = createText("Release date: " + release_date);
    this.rt_score = createText("Score: " + rt_score);

  }
}

//constructor de objetos para seleccionar datos a mostrar
class showCharacters {
  constructor(title, poster, director, release_date, rt_score, description, specie) {
    //"this" indica el objeto en concreto que se utilizará (o algo así)
    this.title = createText("Name: " + title);
    this.poster = createImage(poster);
    this.director = createText("Gender: " + director);
    this.release_date = createText("Age: " + release_date);
    this.rt_score = createText("Eye Color: " + rt_score);
    this.description = createText("Hair Color: " + description);
    this.specie = createText("Specie: " + specie);

  }
}

//llamar los datos
data.films
  //creamos un array de objetos con los datos que queremos sacar.
  .map(film => new titleAndPoster(film.title, film.poster, film.director, film.release_date, film.rt_score))
  //creamos otro array con etiquetas (div)
  .map(Element => divCreator(Element))
  //mostrar los objetos en una sección particular del HTML.
  .forEach(movieDiv => document.getElementById("filmsZone").appendChild(movieDiv))


data.films.flatMap(element => element.people)
  .map(element => new showCharacters(element.name, element.img, element.gender, element.age, element.eye_color, element.hair_color, element.specie))
  .map(Element => divCreatorCharacter(Element))
  .forEach(characterDiv => document.getElementById("charactersZone").appendChild(characterDiv))





// esto crea un div 
function infoDivCreator(x) {
  const movieDivHover = document.createElement("div");
  //este le da clase
  movieDivHover.className = "filmDivsHover"
  //al div creado le agregamos hijos con información tipo texto
  movieDivHover.appendChild(x.title);
  movieDivHover.appendChild(x.director);
  movieDivHover.appendChild(x.release_date);
  movieDivHover.appendChild(x.rt_score);
  return movieDivHover
}

function divInfoCharacter(x) {
  const movieDivHover = document.createElement("div");
  //este le da clase
  movieDivHover.className = "filmDivsHover"
  //al div creado le agregamos hijos con información tipo texto
  movieDivHover.appendChild(x.title);
  movieDivHover.appendChild(x.director);
  movieDivHover.appendChild(x.release_date);
  movieDivHover.appendChild(x.rt_score);
  movieDivHover.appendChild(x.specie)
  return movieDivHover
}


//crea el div para que se organice el conjunto de datos
function divCreator(x) {
  //se crea el div
  const movieDiv = document.createElement("div");
  //le da una clase para poder manipularlos en CSS 
  movieDiv.className = "filmDivs"
  // creamos un hijo con el tag img
  movieDiv.appendChild(x.poster);
  //a el div anterior le damos otro div(hijo) con la información 
  movieDiv.appendChild(infoDivCreator(x))
  return movieDiv
}

//crea el div para que se organice el conjunto de datos
function divCreatorCharacter(x) {
  //se crea el div
  const characterDiv = document.createElement("div");
  //le da una clase para poder manipularlos en CSS 
  characterDiv.className = "filmDivs"
  // creamos un hijo con el tag img
  characterDiv.appendChild(x.poster);
  //a el div anterior le damos otro div(hijo) con la información 
  characterDiv.appendChild(divInfoCharacter(x))
  return characterDiv
}


//creamos un tag img
function createImage(uri) {
  //crea
  const image = document.createElement('img');
  //aqui le indicamos al img que el valor de source es el URL de la imagen
  image.src = uri
  //le damos una clase a los posters
  image.className = "posterImages";
  return image
}

//creamos un tag p para el texto
function createText(textMovie) {
  //aqui se crea el elemento "p"
  const text = document.createElement("p");
  //el contenido texto obtendrá el valor del argumento ingresado
  text.innerText = textMovie;
  //le damos la clase
  text.className = "infoText";
  return text
}

//agregamos el evento para que al seleccionar el director que quiere se dispare
//la función de filtrar
directores.addEventListener("change", function () {
  filterSection.innerHTML = "";
  const directorNuevo = filterDirector(directores.value, data);
  directorNuevo.map(film => new titleAndPoster(film.title, film.poster, film.director, film.release_date, film.rt_score))
    .map(Element => divCreator(Element))
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  document.getElementById("filmsZone").style.display = "none";
  //deberia mostrar el resultado del filtro
  document.getElementById("filterSection").style.display = "flex";
})

productores.addEventListener("change", function () {
  //limpiar la pagina
  filterSection.innerHTML = "";
  //utilizar la funcion filtrar
  const producerNuevo = filterProducer(productores.value, data);
  //devuelve un array con objetos del resultado del filtro
  producerNuevo.map(film => new titleAndPoster(film.title, film.poster, film.director, film.release_date, film.rt_score))
    //crea array con los divs 
    .map(Element => divCreator(Element))
    //poner los divs en pantalla
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  document.getElementById("filmsZone").style.display = "none";
  document.getElementById("filterSection").style.display = "flex";
})

characterMovies.addEventListener("change", function () {
  filterSection.innerHTML = "";
  const characterPerMovie = characterMovie(characterMovies.value, data);
  characterPerMovie.map(film => new showCharacters(film.name, film.img, film.gender, film.age, film.eye_color, film.hair_color, film.specie))
    .map(Element => divCreatorCharacter(Element))
    .forEach(Element => filterSection.appendChild(Element))
  document.getElementById("charactersZone").style.display = "none";
  document.getElementById("filterSection").style.display = "flex";
})


especie.addEventListener("change", function () {
  //limpiar la pagina
  filterSection.innerHTML = "";
  //utilizar la funcion filtrar
  const especieNueva = filterSpecies(especie.value, data);
  //devuelve un array con objetos del resultado del filtro
  especieNueva.map(film => new showCharacters(film.name, film.img, film.gender, film.age, film.eye_color, film.hair_color, film.specie))
    //crea array con los divs 
    .map(Element => divCreatorCharacter(Element))
    //poner los divs en pantalla
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  document.getElementById("charactersZone").style.display = "none";
  //deberia mostrar el resultado del filtro
  document.getElementById("filterSection").style.display = "flex";
})

sortAZ.addEventListener("change", function () {
  filterSection.innerHTML = "";
  const characterSortAZ = functionSortAZ(sortAZ.value, data);
  characterSortAZ.map(film => new showCharacters(film.name, film.img, film.gender, film.age, film.eye_color, film.hair_color, film.specie))
    .map(Element => divCreatorCharacter(Element))
    .forEach(Element => filterSection.appendChild(Element))
  document.getElementById("charactersZone").style.display = "none";
  document.getElementById("filterSection").style.display = "flex";
})

añoDeEstreno.addEventListener("change", function () {
  //limpiar la pagina
  filterSection.innerHTML = "";
  //utilizar la funcion filtrar
  const nuevoOrden = sortDataYear(añoDeEstreno.value, data);
  //devuelve un array con objetos del resultado del filtro
  nuevoOrden.map(film => new titleAndPoster(film.title, film.poster, film.director, film.release_date, film.rt_score))
    //crea array con los divs 
    .map(Element => divCreator(Element))
    //poner los divs en pantalla
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  document.getElementById("filmsZone").style.display = "none";
  //deberia mostrar el resultado del filtro
  document.getElementById("filterSection").style.display = "flex";
})