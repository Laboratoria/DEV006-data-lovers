import data from './data/ghibli/ghibli.js';
import { 
  totalMovie, 
  countCharacters, 
  countCharactersMovie, 
  filterFilms,
  filterCharacter, 
  filterOrden, 
  sortAsc, 
  sortDes,
  calculatePercentage} 
  from './data.js';


const films = data.films;
const filmsBtn = document.getElementById("filmsBtn");
const charactersBtn = document.getElementById("charactersBtn");
const mainElement =  document.getElementById("main");
const walpaper = document.getElementById("body");
const totalPeople = countCharacters(films);


filmsBtn.addEventListener("click",showMovies);


function getAllProducers(films) {
  const allProducers = [];
  films.forEach ((film) => {
    if (!allProducers.includes(film.producer)) {
      allProducers.push(film.producer);
    }
  });
  return allProducers;
}

function getAllDirectors(films) {
  const allDirectors = [];
  films.forEach ((film) => {
    if (!allDirectors.includes(film.director)) {
      allDirectors.push(film.director);
    }
  });
  return allDirectors;
}

function showMovies(event) {
  event.preventDefault();
  //Modify the homepage background with the plain background image.
  document.getElementById("body").style.backgroundImage="url(images/forest-background.jpg)";
/*   const mainElement = document.getElementById("main"); */
  const returnHome = document.createElement("a");
  const producers = getAllProducers(films);
  const directors = getAllDirectors(films);
  producers.unshift("All");
  directors.unshift("All");

  //Go Back button
  returnHome.classList.add("returnButton");
  returnHome.setAttribute("href", "index.html");
  returnHome.textContent = "Back to Home";
 
  //default value for filteredFilms will be films, before dropdown is selected
  const filteredFilms = films;
  //--------------Filtering by producer-----------------------------------------------------
 
  //create a dropdown menu for filtering by producer
  const dropdownProducers = document.createElement("select");
  dropdownProducers.classList.add("filter");
  const labelProducers = document.createElement("label");
  labelProducers.classList.add("filter-label");
  labelProducers.textContent = "Filter by producer: ";
  labelProducers.appendChild(dropdownProducers);
  
  //appends the dropdown options with the producer names
  producers.forEach(function (producer) {
    const option = document.createElement("option");
    option.value = producer;
    option.textContent = producer;
    dropdownProducers.appendChild(option);
  });
  //------------------------------------------------------------------------------------------
  //--------------Filtering by director-------------------------------------------------------
 
  //create a dropdown menu for filtering by director
  const dropdownDirectors = document.createElement("select");
  dropdownDirectors.classList.add("filter");
  const labelDirectors = document.createElement("label");
  labelDirectors.classList.add("filter-label");
  labelDirectors.textContent = "Filter by director: ";
  labelDirectors.appendChild(dropdownDirectors);
  
  //appends the dropdown options with the directors' names
  directors.forEach(function (director) {
    const option = document.createElement("option");
    option.value = director;
    option.textContent = director;
    dropdownDirectors.appendChild(option);
  });
  //------------------------------------------------------------------------------------------
  //--------------Order A-Z-------------------------------------------------------------------

  const sortBtnAsc = document.createElement("button");
  sortBtnAsc.classList.add("sortButton");
  sortBtnAsc.textContent = "Order A-Z";
 

  sortBtnAsc.addEventListener("click", function() {
    // Make a copy of the films array
    const sortedFilms = filteredFilms.slice();
    const selectedProducer = dropdownProducers.value;
    const selectedDirector = dropdownDirectors.value;
    const filtered = filterFilms(sortedFilms, selectedProducer, selectedDirector);
    const sortedAsc = sortAsc(filtered);
    showPosters(sortedAsc);
  });
  //------------------------------------------------------------------------------------------
  //--------------Order Z-A ------------------------------------------------------------------
  const sortBtnDes = document.createElement("button");
  sortBtnDes.classList.add("sortButton");
  sortBtnDes.textContent = "Order Z-A";

  sortBtnDes.addEventListener("click", function() {
    // Make a copy of the films array
    const sortedFilms = filteredFilms.slice();
    const selectedProducer = dropdownProducers.value;
    const selectedDirector = dropdownDirectors.value;
    const filtered = filterFilms(sortedFilms, selectedProducer, selectedDirector);
    const sortedDes = sortDes(filtered);
    showPosters(sortedDes);
    
  });

  //------------------------------------------------------------------------------------------

  mainElement.innerHTML = "";
  mainElement.appendChild(returnHome);

  //Add movie counter to main section
  const totalValue = document.createElement("p");
  totalValue.classList.add("counter");
  mainElement.appendChild(totalValue);

  // create an element to display the percentage
  const percentageValue = document.createElement("p");
  percentageValue.classList.add("counter");
  mainElement.appendChild(percentageValue);




  //add producers & directors filter dropdown to main section
  mainElement.appendChild(labelProducers);
  mainElement.appendChild(labelDirectors);
  mainElement.appendChild(sortBtnAsc);
  mainElement.appendChild(sortBtnDes);
  //create the posters container
  const postersContainer = document.createElement("div");
  postersContainer.classList.add("posters-container");
  //add posters container to main 
  mainElement.appendChild(postersContainer);
  


  function handleFiltersChange() {
    const selectedProducer = dropdownProducers.value;
    const selectedDirector = dropdownDirectors.value;
    const filtered = filterFilms(films, selectedProducer, selectedDirector);

    const percentage = calculatePercentage(films,filtered);

    let selectedDirectorText = "";
    let selectedProducerText = "";
    

    if (selectedDirector === 'All') {
      
      selectedDirectorText = 'no specific director';
    } else {
      selectedDirectorText = selectedDirector;
    }
    
    
    if (selectedProducer === 'All') {
      
      selectedProducerText = 'no specific producer';
    } else {
      
      selectedProducerText = selectedProducer;
    }
    


    // set the text content of the percentage element
    percentageValue.textContent = `${percentage}% of all movies were directed by ${selectedDirectorText} and were produced by ${selectedProducerText}`;


    

    //showPosters is passed only the filtered films as an argument
    showPosters(filtered);
  }
  
  dropdownProducers.addEventListener("change", handleFiltersChange);
  
  dropdownDirectors.addEventListener("change", handleFiltersChange);


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
  totalValue.innerHTML = `<p> ${totalMovies} movies found</p>`;

}

function movieDetails(event){

  // create a button element for returning to HOME
  const returnButton = document.createElement("button");
  returnButton.textContent = "Return to Animations";
  returnButton.classList.add("returnButton");
  
  // add event listener to the button that goes back to HOME
  returnButton.addEventListener("click", showMovies);

  //retrieve movie that user clicked on
  const clickedElement = event.currentTarget;
  const elementId = clickedElement.getAttribute("id");
  //compare poster id to id's in data to retrieve movie
  const selectedMovie = films.find(movie => movie.id === elementId);
  const peopleTotal = countCharactersMovie(selectedMovie);
  //Div for all the movie information
  const movieDetailsDiv = document.createElement("div");
  movieDetailsDiv.classList.add("movie-details");
  movieDetailsDiv.innerHTML = `
    
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
      <div class="content">   ${selectedMovie.vehicles.length === 0 ? "None found" :
    selectedMovie.vehicles.map(vehicle =>
      `<div class="vehicle">
          <img src="${vehicle.img}" alt="${vehicle.name}" class="medium-img">
          <div class="vehicle-details">
            <div class="vehicle-name">${vehicle.name}</div>
            <div class="vehicle-description">${vehicle.description}</div>
          </div>
        </div>`
    ).join("")}
    </div>
  </div>
      <div class="container">
      <div class="label">Locations</div>
      <div class="content">${selectedMovie.locations.length === 0 ? "None found" :
    selectedMovie.locations.map(place =>
      `<div class="place">
          <img src="${place.img}" alt="${place.name}" class="medium-img">
          <div class="place-details">
          <div class="place-name">${place.name}</div>
          <div class="place-climate">Climate: ${place.climate}</div>
          <div class="place-terrain">Terrain: ${place.terrain}</div>
          <div class="place-surface-water">Surface Water: ${place.surface_water}</div>
          <div class="place-residents">Residents: ${place.residents.length === 0 ? "None" :
    place.residents.map(resident => resident.name).join(", ")}</div>
        </div>
      </div>`
    ).join("")}</div>
      </div>
      </div>
      
    `;
  
  
  //add movieDetails div to the main section
/*   const mainElement = document.getElementById("main"); */
  mainElement.innerHTML = "";
  // add the return button to the page
  mainElement.appendChild(returnButton);
  mainElement.appendChild(movieDetailsDiv);

  

  //change accordion's containers class to active when clicked (this class displays the hidden info)
  const accordion = document.getElementsByClassName("container");

  for (let i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
      this.classList.toggle('active')
    })
  }
}
  
//event listener for the ChARACTERS button
charactersBtn.addEventListener("click",showCharacters);

//create an array with all species, without duplicates
function getAllSpecies(films) {
  const allSpecies = [];
  films.forEach((film) => {
    film.people.forEach((person) => {
      if (!allSpecies.includes(person.specie)) {
        allSpecies.push(person.specie);
      }
    });
  });
 
  return allSpecies;
  
}

//create an array with all Films, without duplicates
function getAllAnimations(films) {
  const allAnimations = [];
  films.forEach((film) => {
    if (!allAnimations.includes(film.title)) {
      allAnimations.push(film.title);
    }
  });
 
  return allAnimations;
  
}

function showCharacters(event){

  walpaper.style.backgroundImage = "url(images/forest-background.jpg)";
  //characters button is an <a>, prevent default event (going to new page)
  event.preventDefault();
  const backbtn = document.createElement("a");
  //Go Back button
  backbtn.classList.add("returnButton");
  backbtn.setAttribute("href", "index.html");
  backbtn.textContent = "Back to Home";
  mainElement.innerHTML="";
  mainElement.appendChild(backbtn);
  //Contador para los personajes
  mainElement.insertAdjacentHTML('beforeend', `<p class="counter">${totalPeople} characters found</p>`);
  
  const dropdownChar = document.createElement("select");
  const species = getAllSpecies(films);
  species.unshift("All");
  dropdownChar.id="select-species";
  dropdownChar.classList.add("filter");

  const labelChar = document.createElement("label");
  labelChar.classList.add("filter-label");
  labelChar.textContent = "Filter by species ";
  labelChar.appendChild(dropdownChar);

  const dropdownfilms = document.createElement("select");
  const animations = getAllAnimations(films);
  animations.unshift("All");
  dropdownfilms.id="select-animations";
  dropdownfilms.classList.add("filter");

  const labelFilms = document.createElement("label");
  labelFilms.classList.add("filter-label");
  labelFilms.textContent = "Filter by animation: ";
  labelFilms.appendChild(dropdownfilms);

  const sortCharAsc = document.createElement("button");
  sortCharAsc.classList.add("sortButton");
  sortCharAsc.textContent = "Order A-Z";
  sortCharAsc.addEventListener("click",ordenadosAlfabeto)

  const sortCharDes = document.createElement("button");
  sortCharDes.classList.add("sortButton");
  sortCharDes.textContent = "Order Z-A";
  sortCharDes.addEventListener("click",ordenadosAlfabeto)



  species.forEach((s) => {
    const link = document.createElement("option");
    link.href = "#"+s;
    link.textContent =s; 
    dropdownChar.appendChild(link);
    dropdownChar.addEventListener("click",filterChar);
    sortCharAsc.innerHTML= "Order A-Z"
    sortCharDes.innerHTML= "Order Z-A"
  });

  

  animations.forEach((s) => {
    const link = document.createElement("option");
    link.href = "#"+s;
    link.textContent =s; 
    dropdownfilms.appendChild(link);
    dropdownfilms.addEventListener("click",filterChar);
    sortCharAsc.innerHTML= "Order A-Z"
    sortCharDes.innerHTML= "Order Z-A"

  });


  
  mainElement.appendChild(labelChar);
  mainElement.appendChild(labelFilms); 
  mainElement.appendChild(sortCharAsc); 
  mainElement.appendChild(sortCharDes); 

  mainElement.insertAdjacentHTML('beforeend', `<div id="charactersBig" >` + films.map((movie) => movie.people.map(character => `
  
    <div class="characterBig" >

    <img src="`+ character.img + `" />
    
    <div class="overlay">
    <h3>Title: `+ movie.title +`</h3>
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


function filterChar() {
  const selectedSpecies = document.getElementById("select-species").value;
  const selectedAnimations = document.getElementById("select-animations").value;
  const characters = document.querySelectorAll(".characterBig");
  

  let totalCount  = 0; 
  characters.forEach((character) => {
    const specie = character.querySelector("h3:nth-child(7)").textContent.split(": ")[1];
    const animation = character.querySelector("h3:nth-child(1)").textContent.split(": ")[1];
    totalCount += filterCharacter(character,selectedSpecies,selectedAnimations,specie,animation);

  });
  
  const counter = document.querySelector(".counter");
  counter.textContent = `${totalCount} characters found`;
  
}

function ordenadosAlfabeto(event) {
  const selectOrden = event.target.innerHTML;
  let order = 0;
  if (selectOrden === "Order A-Z") {
    order = 1;
  } else if (selectOrden === "Order Z-A") {
    order = -1;
  }

  const characters = document.querySelectorAll(".characterBig");
  const charactersArray = Array.from(characters);
  const container = document.getElementById("charactersBig");
  container.innerHTML = "";
  filterOrden(charactersArray, container, order);
}

document.addEventListener('DOMContentLoaded', function() {

  const menuBtn = document.querySelector('.menu-icon');
  const menu = document.querySelector('.main-menu ul');

  menuBtn.addEventListener('click', function() {
    if(menu.classList.contains('show')){
      menu.classList.remove('show');
    }else {
      menu.classList.add('show');
    }
  });
  
});
