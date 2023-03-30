

import data from './data/ghibli/ghibli.js';
import { totalMovie, countCharacters, countCharactersforPeople,filterFilms} from './data.js';


const films = data.films;
const filmsBtn = document.getElementById("filmsBtn");
const charactersBtn = document.getElementById("charactersBtn");
const mainElement =  document.getElementById("main");
const walpaper = document.getElementById("body");


filmsBtn.addEventListener("click",showMovies);

const totalMovies = totalMovie(films);

const totalPeople = countCharacters(films);



function showMovies(event) {
  event.preventDefault();
   
  const producers = ["all", "Hayao Miyazaki", "Toshio Suzuki", "Isao Takahata", "Yoshiaki Nishimura", "Toru Hara"];
  //create a dropdown menu for filtering by producer
  const dropdown = document.createElement("select");
  //appends the dropdown options with the producer names
  producers.forEach(function (producer) {
    const option = document.createElement("option");
    option.value = producer.toLowerCase().replace(" ", "-");
    option.textContent = producer;
    dropdown.appendChild(option);
  });

  const mainElement = document.getElementById("main");
  mainElement.innerHTML = "";

  //Add movie counter to main section
  const totalValue = document.createElement("p");
  totalValue.classList.add("counter");
  mainElement.appendChild(totalValue);
  //add dropdown to main section
  mainElement.appendChild(dropdown);
  //create the posters container
  const postersContainer = document.createElement("div");
  postersContainer.classList.add("posters-container");
  mainElement.appendChild(postersContainer);
  
  //default value for filteredFilms will be films, before dropdown is selected
  const filteredFilms = films;
  //event listener for dropdown, chosen option is asigned to selectedProducer, filterFilms is used to filter all the films by this producer
  dropdown.addEventListener("change", function() {
    const selectedProducer = dropdown.value;
    const filtered = filterFilms(films, selectedProducer);
    //showPosters is passed only the filtered films as an argument
    showPosters(filtered);
  });
  //default if dropdown is not used
  showPosters(filteredFilms);
  
}

function showPosters(filteredFilms) {
  const postersContainer = document.querySelector(".posters-container");
  postersContainer.innerHTML = "";

  for (let i = 0; i < filteredFilms.length; i++) {
    const divFilm = document.createElement("div");
    divFilm.classList.add("poster");
    divFilm.innerHTML = `<img src="${filteredFilms[i].poster}" alt="">`;
    divFilm.setAttribute("id", filteredFilms[i].id);
    postersContainer.appendChild(divFilm);
    divFilm.addEventListener("click", movieDetails);
  }

  //value for movie counter
  const totalMovies = totalMovie(filteredFilms);
  const totalValue = document.querySelector(".counter");
  totalValue.innerHTML = `<p> Se muestran ${totalMovies} resultados</p>`;

}
  


function movieDetails(event){

  const clickedElement = event.currentTarget;
  const elementId = clickedElement.getAttribute("id");
  const selectedMovie = films.find(movie => movie.id === elementId);

  const peopleTotal = countCharactersforPeople(selectedMovie);
  
  const movieDetailsDiv = document.createElement("div");
  movieDetailsDiv.classList.add("movie-details");
  movieDetailsDiv.innerHTML = `
     <div class="movie-details">
     <div class="movie-header">
      <h2>${selectedMovie.title}</h2>   
     <div class="movie-poster">
      <img src="${selectedMovie.poster}" alt="${selectedMovie.title} poster">
     </div>
     </div>
      <div class="accordion">
      <div class="container">
        <div class="label">Description</div>
        <div class="content">${selectedMovie.description}</div>
      </div>
      <div class="container">
        <div class="label">Producer</div>
        <div class="content">${selectedMovie.producer}</div>
      </div>
       <div class="container">
        <div class="label">Director</div>
        <div class="content">${selectedMovie.director}</div>
      </div>
       <div class="container">
        <div class="label">Release Date</div>
        <div class="content">${selectedMovie.release_date}</div>
      </div>
       <div class="container">
        <div class="label">Rotten Tomatoes Score</div>
        <div class="content">${selectedMovie.rt_score}</div>
      </div>
      <div class="container">
      <div class="label">Characters (${peopleTotal})</div>
      <div class="content">${selectedMovie.people.map(person =>
    `<div class="character">
           <img src="${person.img}" alt="${person.name}" class="mini-img">
           <div>${person.name}</div>
         </div>`
  ).join("")}</div>
      </div>
      <div class="container">
      <div class="label">Vehicles</div>
      <div class="content">${selectedMovie.vehicles.map(vehicle =>
    `<div class="vehicle">
           <img src="${vehicle.img}" alt="${vehicle.name}" class="medium-img">
           <div>${vehicle.name}</div>
         </div>`
  ).join("")}</div>
      </div>
      <div class="container">
      <div class="label">Locations</div>
      <div class="content">${selectedMovie.locations.map(place =>
    `<div class="place">
           <img src="${place.img}" alt="${place.name}" class="medium-img">
           <div>${place.name}</div>
         </div>`
  ).join("")}</div>
      </div>
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


  
mainElement.innerHTML = `<p class="counter">${totalPeople} characters found</p>`

  const dropdown = document.createElement("select");
  const species = [
    "All",
    "Human",
    "Spirit",
    "Totoro",
    "Cat",
    "Witch",
    "Raccoon Dog",
    "Red elk",
    "Wolf",
    "Deity, Dragon",
    "Spirit of The White Fox",
    "unknown",
    "Bird",
    "Wizard",
    "Witch/Human",
    "Demon",
    "Human/Scarecrow",
    "Dog",
    "Fish/Human",
    "Deity",
    "Borrower"
  ] ;

  species.forEach((s) => {
    const link = document.createElement("option");
    link.href = "#"+s;
    link.textContent = s; link.addEventListener("click",filterSpecies);
    dropdown.appendChild(link);
    

  });
  mainElement.appendChild(dropdown);
  mainElement.insertAdjacentHTML('beforeend', `<div id="charactersBig">` + films.map((movie) => movie.people.map(character => `
  
    <div class="characterBig" >
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


`).join("") ).join("")+`</div>`

  )
}


function filterSpecies(event) {
  const selectedSpecies = event.target.value;
  const characters = document.querySelectorAll(".characterBig");

  let count = 0;
  characters.forEach((character) => {
    const specie = character.querySelector("h3:nth-child(6)").textContent.split(": ")[1];
    if (selectedSpecies === "All" || specie === selectedSpecies) {
      character.style.display = "inline-block";
      count++;
    } else {
      character.style.display = "none";
    }
  });

  const counter = document.querySelector(".counter");
  counter.textContent = `${count} characters found`;
}

