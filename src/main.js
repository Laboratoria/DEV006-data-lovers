import { filterDirector, sortDataYear, filterProducer, sortData, filterSpecies } from './data.js';
import data from './data/ghibli/ghibli.js';

const movies = document.getElementById("movies");
const filterSection = document.getElementById("filterSection");
const directores = document.getElementById("Directores");
const productores = document.getElementById("Productores");
const puntuacion = document.getElementById("Puntuacion");
const añoDeEstreno = document.getElementById("añoDeEstreno");
const especie = document.getElementById("Especie");

movies.addEventListener("click", function (){
  document.getElementById("welcome").style.display = "none"
  document.getElementById("filmsZone").style.display = "flex"
  document.getElementById()
})


//constructor de objetos para seleccionar datos a mostrar
class titleAndPoster {
  constructor(title, poster, director, release_date, rt_score, description) {
    //"this" indica el objeto en concreto que se utilizará (o algo así)
    this.poster = createImage(poster);
    this.title = createText("Titulo: " + title);
    this.director = createText("Director: " + director);
    this.release_date = createText("Fecha de estreno: " + release_date);
    this.rt_score = createText("Puntuacion: " + rt_score);
    this.description = createText("Descripcion: " + description);

  }
}

//constructor de objetos para seleccionar datos a mostrar
class characters {
  constructor(title, poster, director, release_date, rt_score, description, specie) {
    //"this" indica el objeto en concreto que se utilizará (o algo así)
    this.title = createText("Nombre: " + title);
    this.poster = createImage(poster);
    this.director = createText("Genero: " + director);
    this.release_date = createText("Edad: " + release_date);
    this.rt_score = createText("Color de ojos: " + rt_score);
    this.description = createText("Color de Pelo: " + description);
    this.specie = createText("Especie: " + specie);

  }
}

//llamar los datos
data.films
  //creamos un array de objetos con los datos que queremos sacar.
  .map(film => new titleAndPoster(film.title, film.poster, film.director, film.release_date, film.rt_score, film.description))
  //creamos otro array con etiquetas (div)
  .map(Element => divCreator(Element))
  //mostrar los objetos en una sección particular del HTML.
  .forEach(movieDiv => document.getElementById("filmsZone").appendChild(movieDiv))

// esto crea un div 
function divCreatorhover(x) {
  const movieDivHover = document.createElement("div");
  //este le da clase
  movieDivHover.className = "filmDivsHover"
  //al div creado le agregamos hijos con información tipo texto
  movieDivHover.appendChild(x.title);
  movieDivHover.appendChild(x.director);
  movieDivHover.appendChild(x.release_date);
  movieDivHover.appendChild(x.rt_score);
  movieDivHover.appendChild(x.description);
  return movieDivHover
}

function divCreatorhoverCharacter(x) {
  const movieDivHover = document.createElement("div");
  //este le da clase
  movieDivHover.className = "filmDivsHover"
  //al div creado le agregamos hijos con información tipo texto
  movieDivHover.appendChild(x.title);
  movieDivHover.appendChild(x.director);
  movieDivHover.appendChild(x.release_date);
  movieDivHover.appendChild(x.rt_score);
  movieDivHover.appendChild(x.description);
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
  movieDiv.appendChild(divCreatorhover(x))
  return movieDiv
}

//crea el div para que se organice el conjunto de datos
function divCreatorCharacter(x) {
  //se crea el div
  const movieDiv = document.createElement("div");
  //le da una clase para poder manipularlos en CSS 
  movieDiv.className = "filmDivs"
  // creamos un hijo con el tag img
  movieDiv.appendChild(x.poster);
  //a el div anterior le damos otro div(hijo) con la información 
  movieDiv.appendChild(divCreatorhoverCharacter(x))
  return movieDiv
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
  text.className = "text";
  return text
}

//agregamos el evento para que al seleccionar el director que quiere se dispare
//la función de filtrar
directores.addEventListener("change", function () {
  filterSection.innerHTML = "";
  const directorNuevo = filterDirector(directores.value, data);
  directorNuevo.map(film => new titleAndPoster(film.title, film.poster, film.director, film.release_date, film.rt_score, film.description))
    .map(Element => divCreator(Element))
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  document.getElementById("filmsZone").style.display = "none";
  //deberia mostrar el resultado del filtro
  filterSection.style.display = "flex";
})

productores.addEventListener("change", function () {
  //limpiar la pagina
  filterSection.innerHTML = "";
  //utilizar la funcion filtrar
  const producerNuevo = filterProducer(productores.value, data);
  //devuelve un array con objetos del resultado del filtro
  producerNuevo.map(film => new titleAndPoster(film.title, film.poster, film.director, film.release_date, film.rt_score, film.description))
    //crea array con los divs 
    .map(Element => divCreator(Element))
    //poner los divs en pantalla
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  document.getElementById("filmsZone").style.display = "none";
  //deberia mostrar el resultado del filtro
  document.getElementById("filterSection").style.display = "flex";
})

especie.addEventListener("change", function () {
  //limpiar la pagina
  filterSection.innerHTML = "";
  //utilizar la funcion filtrar
  const especieNueva = filterSpecies(especie.value, data);
  //devuelve un array con objetos del resultado del filtro
  especieNueva.map(film => new characters(film.name, film.img, film.gender, film.age, film.eye_color, film.hair_color, film.specie))
    //crea array con los divs 
    .map(Element => divCreatorCharacter(Element))
    //poner los divs en pantalla
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  document.getElementById("filmsZone").style.display = "none";
  //deberia mostrar el resultado del filtro
  document.getElementById("filterSection").style.display = "flex";
})

puntuacion.addEventListener("change", function () {
  //limpiar la pagina
  filterSection.innerHTML = "";
  //utilizar la funcion filtrar
  const nuevoOrden = sortData(puntuacion.value, data);
  //devuelve un array con objetos del resultado del filtro
  nuevoOrden.map(film => new titleAndPoster(film.title, film.poster, film.director, film.release_date, film.rt_score, film.description))
    //crea array con los divs 
    .map(Element => divCreator(Element))
    //poner los divs en pantalla
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  document.getElementById("filmsZone").style.display = "none";
  //deberia mostrar el resultado del filtro
  document.getElementById("filterSection").style.display = "flex";
})

añoDeEstreno.addEventListener("change", function () {
  //limpiar la pagina
  filterSection.innerHTML = "";
  //utilizar la funcion filtrar
  const nuevoOrden = sortDataYear(añoDeEstreno.value, data);
  //devuelve un array con objetos del resultado del filtro
  nuevoOrden.map(film => new titleAndPoster(film.title, film.poster, film.director, film.release_date, film.rt_score, film.description))
    //crea array con los divs 
    .map(Element => divCreator(Element))
    //poner los divs en pantalla
    .forEach(Element => filterSection.appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  document.getElementById("filmsZone").style.display = "none";
  //deberia mostrar el resultado del filtro
  document.getElementById("filterSection").style.display = "flex";
})