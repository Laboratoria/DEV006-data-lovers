import {countCharacters} from './data.js'

import data from './data/ghibli/ghibli.js';
import { totalMovie, countCharacters, countCharactersforPeople } from './data.js';


const films = data.films;
const filmsBtn = document.getElementById("filmsBtn");
const charactersBtn = document.getElementById("charactersBtn");
const mainElement =  document.getElementById("main");
const walpaper = document.getElementById("body");



filmsBtn.addEventListener("click",showMovies);

const totalMovies = totalMovie(films);
/* let totalPeoples = totalPeople(films);
console.log(totalPeoples); */
const totalPeople = countCharacters(films);


const totalPeople = countCharacters(films);

console.log(totalPeople);

function showMovies(event){
  event.preventDefault();
  document.getElementById("body").style.backgroundImage="url(images/forest-background.jpg)";
  const mainElement = document.getElementById("main");
  mainElement.innerHTML = "";
  const totalValue = document.createElement("p");
  totalValue.classList.add("counter");
  totalValue.innerHTML = `<p> Se muestran ${totalMovies} resultados</p>`;
  mainElement.appendChild(totalValue);
  for (let i = 0; i < films.length; i++) {
    const divFilm = document.createElement("div");
    divFilm.classList.add("poster");
    divFilm.innerHTML = `<img src="${films[i].poster}" alt="">`;
    divFilm.setAttribute("id", films[i].id);
    mainElement.appendChild(divFilm);
    divFilm.addEventListener("click", movieDetails);
  }

 
}
  

/* <h2>${selectedMovie.title}</h2> */
function movieDetails(event){
  
  const clickedElement = event.currentTarget;
  const elementId = clickedElement.getAttribute("id");
  const selectedMovie = films.find(movie => movie.id === elementId);

  const peopleTotal = countCharactersforPeople(selectedMovie);
  
  const movieDetailsDiv = document.createElement("div");
  movieDetailsDiv.classList.add("movie-details");
  movieDetailsDiv.innerHTML = `
      
      <img src="${selectedMovie.poster}" >
      <div class="accordion">
      <div class="container">
        <div class="label">Descripcion</div>
        <div class="content">${selectedMovie.description}</div>
      </div>
      <div class="container">
        <div class="label">Productor</div>
        <div class="content">${selectedMovie.producer}</div>
      </div>
       <div class="container">
        <div class="label">Director</div>
        <div class="content">${selectedMovie.director}</div>
      </div>
       <div class="container">
        <div class="label">Fecha de lanzamiento</div>
        <div class="content">${selectedMovie.release_date}</div>
      </div>
       <div class="container">
        <div class="label">Calificación</div>
        <div class="content">${selectedMovie.rt_score}</div>
      </div>
      <div class="container">
      <div class="label">Personajes (${peopleTotal})</div>
      <div class="content">${selectedMovie.people.map(person => person.name).join(", ")}</div>
      </div>
      </div>
      
    `;
  
  const mainElement = document.getElementById("main");
  mainElement.innerHTML = "";
  mainElement.appendChild(movieDetailsDiv);

  


  const accordion = document.getElementsByClassName("container");

  for (let i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
      this.classList.toggle('active')
    })
  }
}
  
charactersBtn.addEventListener("click",showCharacters);

function showCharacters(event){
  walpaper.style.backgroundImage = "url(images/forest-background.jpg)";
  event.preventDefault();

  const totalCharacters = document.createElement("p");
  totalCharacters.classList.add("counter");
  totalCharacters.innerHTML = `<p> Se muestran ${totalPeople} resultados</p>`;
  mainElement.appendChild(totalCharacters);

  mainElement.innerHTML = `<p class="counter"> Se muestran ${totalPeople} resultados</p>` 
  + films.map((movie) => movie.people.map(character => `
    <div class="people">
    
    <img src="`+ character.img + `" />
    
    <div class="overlay">
    <h3>Name: `+ character.name +`</h3>
    <h3>Gender: `+ character.gender +`</h3>
    <h3>Age: `+ character.age +`</h3>
    <h3>Eye color: `+ character.eye_color +`</h3>
    <h3>Hair color: `+ character.hair_color +`</h3>
    <h3>Specie: `+ character.specie +`</h3>
    </div>
        
    </div>

`));
}

/* function showMovies(event){
  event.preventDefault();
  document.getElementById("body").style.backgroundImage="url(images/forest-background.jpg)"
  document.getElementById("main").innerHTML = films.map((movie) => `
    <div class="poster" id="${movie.id}">
     <img src="${movie.poster}" />
    </div>
  `);
  const posterBtn = document.querySelectorAll('.poster');
  posterBtn.forEach(button => {
    button.addEventListener('click', function handleClick(event) {
      console.log('box clicked', event);
  
     
    });
  });

}


 */










/* filmsBtn.addEventListener("click",showMovies);

function showMovies(event){
  event.preventDefault();
  walpaper.style.backgroundImage = "url(images/forest-background.jpg)";

  mainElement.innerHTML = films.map((pelicula) => `

  <div class="poster">
  
    <img src="`+ pelicula.poster + `" />
      
  </div>

`);
}

charactersBtn.addEventListener("click",showCharacters);

function showCharacters(event){
  walpaper.style.backgroundImage = "url(images/forest-background.jpg)";
  event.preventDefault();

  mainElement.innerHTML = films.map((movie) => movie.people.map(character => `

    <div class="people">
    
    <img src="`+ character.img + `" />
    
    <div class="overlay">
    <h3>Name: `+ character.name +`</h3>
    <h3>Gender: `+ character.gender +`</h3>
    <h3>Age: `+ character.age +`</h3>
    <h3>Eye color: `+ character.eye_color +`</h3>
    <h3>Hair color: `+ character.hair_color +`</h3>
    <h3>Specie: `+ character.specie +`</h3>
    </div>
        
    </div>

`));
}  */