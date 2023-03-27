import data from './data/ghibli/ghibli.js';


/* const films = data.films;
const filmsBtn = document.getElementById("filmsBtn");
const charactersBtn = document.getElementById("charactersBtn");
const mainElement =  document.getElementById("main");
const walpaper = document.getElementById("body");


filmsBtn.addEventListener("click",showMovies);

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
} */