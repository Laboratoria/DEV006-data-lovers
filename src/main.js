import { dataFilter } from './data.js';
import { sortData } from './data.js';
import { stats } from './data.js';

import data from './data/ghibli/ghibli.js';

const directores =  document.getElementById("Directores");
const directorSection = document.getElementById("directorSection")
const productores =  document.getElementById("productores");
const puntuacion =  document.getElementById("puntuacion");
const añoDeEstreno=  document.getElementById("añoDeEstreno");
const especie =  document.getElementById("especie");


console.log(dataFilter, sortData, stats, data);

//constructor de objetos para seleccionar datos a mostrar
class titleAndPoster {
  constructor(title, poster,director,release_date,rt_score,description) {
    //"this" indica el objeto en concreto que se utilizará (o algo así)
    this.poster = createImage(poster);
    this.title = createText(title);
    this.director = createText(director);
    this.release_date = createText(release_date);
    this.rt_score = createText(rt_score);
    this.description = createText(description);

  }
}
//llamar los datos
data.films
//creamos un array de obejtos con los datos que queremos sacar.
  .map(film => new titleAndPoster(film.title,film.poster,film.director,film.release_date,film.rt_score,film.description))
  //creamos otro array con etiquetas (div)
  .map(Element => divCreator(Element))
  //mostrar los objetos en una sección particular del HTML.
  .forEach(movieDiv =>document.getElementById("filmsZone").appendChild(movieDiv))

// esto crea un div 
function divCreatorhover(x){
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

//crea el div para que se organice el conjunto de datos
function divCreator(x){
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

//creamos un tag img
function createImage(uri){
  //crea
  const image = document.createElement('img');
  //aqui le indicamos al img que el valor de source es el URL de la imagen
  image.src = uri
  //le damos una clase a los posters
  image.className = "posterImages";
  return image
}

//creamos un tag p para el texto
function createText(textMovie){
  //aqui se crea el elemento "p"
  const text = document.createElement("p");
  //el contenido texto obtendrá el valor de argumento ingresado
  text.innerText = textMovie;
  //le damos la clase
  text.className =  "text";
  return text
}

//agregamos el evento para que al seleccionar el director que quiere se dispare
//la función de filtrar
directores.addEventListener("change",function() {
  const directorNuevo = dataFilter(directores.value,data);
  directorNuevo.map(film => new titleAndPoster(film.title,film.poster,film.director,film.release_date,film.rt_score,film.description))
  .map(Element => divCreator(Element))
  .forEach(Element =>document.getElementById("directorSection").appendChild(Element))
  //ocultar la pantalla de inicio al usar el filtro
  document.getElementById("filmsZone").style.display = "none";
  //deberia mostrar el resultado del filtro
  document.getElementById ("directorSection").style.display = "flex";
} )

