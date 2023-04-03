import data from './data/ghibli/ghibli.js';
import { totalMovie, countCharacters, countCharactersforPeople, filterFilms,filterCharacter, filterOrden, sortAsc, sortDes} from './data.js';


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
  const mainElement = document.getElementById("main");
  const returnHome = document.createElement("a");
  const producers = getAllProducers(films);
  const directors = getAllDirectors(films);
  producers.unshift("all");
  directors.unshift("all");

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
  const label = document.createElement("label");
  label.classList.add("filter-label");
  label.textContent = "Filter by producer: ";
  label.appendChild(dropdownProducers);
  
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
  
    const sortedFilmsAsc = sortAsc(sortedFilms);
  
    // Show the sorted films
    showPosters(sortedFilmsAsc);
  });
  //------------------------------------------------------------------------------------------
  //--------------Order Z-A ------------------------------------------------------------------
  const sortBtnDes = document.createElement("button");
  sortBtnDes.classList.add("sortButton");
  sortBtnDes.textContent = "Order Z-A";

  sortBtnDes.addEventListener("click", function() {
    // Make a copy of the films array
    const sortedFilms = filteredFilms.slice();
  
    const sortedFilmsDes = sortDes(sortedFilms);
  
    // Show the sorted films
    showPosters(sortedFilmsDes);
  });

  //------------------------------------------------------------------------------------------

  mainElement.innerHTML = "";
  mainElement.appendChild(returnHome);

  //Add movie counter to main section
  const totalValue = document.createElement("p");
  totalValue.classList.add("counter");
  mainElement.appendChild(totalValue);
  //add producers & directors filter dropdown to main section
  mainElement.appendChild(label);
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
  totalValue.innerHTML = `<p> Se muestran ${totalMovies} resultados</p>`;

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
  const peopleTotal = countCharactersforPeople(selectedMovie);
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
           <div>${place.name} </div>
      </div>`
  ).join("")}</div>
      </div>
      </div>
      
    `;
  
  
  //add movieDetails div to the main section
  const mainElement = document.getElementById("main");
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
  mainElement.insertAdjacentHTML('beforeend', `<p class="counter">${totalPeople} characters found</p>`);

  mainElement.innerHTML = `<p class="counter">${totalPeople} characters found</p>`
  /*   `<label for="species">Select the specie:</label>` */
/*   const dropdown = document.createElement("select");
  dropdown.classList.add("filter");
  dropdown.id="select-species";

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
  ] ; */
  /* mainElement.innerHTML = `<p class="counter">${totalPeople} characters found</p>` */

  const dropdown = document.createElement("select");
  const species = getAllSpecies(films);
  species.unshift("All");


  const dropdown2 = document.createElement("select");
  dropdown2.classList.add("filter");
  dropdown2.id="select-animations";

  /*   const label2 = document.createElement("label");
  label2.classList.add("filter-label");
  label2.textContent = "Filter by animation: ";
  label2.appendChild(dropdown2); */
  
  const animations = [
    "All",
    "Castle in the Sky",
    "My Neighbor Totoro",
    "Kiki's Delivery Service",
    "Grave of the Fireflies",
    "Only Yesterday",
    "Porco Rosso",
    "Pom Poko",
    "Whisper of the Heart",
    "Princess Mononoke",
    "My Neighbors the Yamadas",
    "Spirited Away",
    "The Cat Returns",
    "Howl's Moving Castle",
    "Tales from Earthsea",
    "Ponyo on the Cliff by the Sea",
    "The Secret World of Arrietty",
    "From Up on Poppy Hill",
    "The Wind Rises",
    "The Tale of the Princess Kaguya",
    "When Marnie Was There"
  ] ;
  
  const ordenado = document.createElement("button");
  ordenado.classList.add("ordenado");
  ordenado.addEventListener("click",ordenadosAlfabeto)


  species.forEach((s) => {
    const link = document.createElement("option");
    link.href = "#"+s;
    link.textContent =s; 
    dropdown.appendChild(link);
    dropdown.addEventListener("click",filterSpecies);
  });

  animations.forEach((s) => {
    const link = document.createElement("option");
    link.href = "#"+s;
    link.textContent =s; 
    dropdown2.appendChild(link);
    dropdown2.addEventListener("click",filterSpecies);
    ordenado.innerHTML= "A-Z"

  });


  
  mainElement.appendChild(dropdown);
  mainElement.appendChild(dropdown2);    
  mainElement.appendChild(ordenado);  
  mainElement.insertAdjacentHTML('beforeend', `<div id="charactersBig" >` + films.map((movie) => movie.people.map(character => `
  
    <div class="characterBig" >

    <img src="`+ character.img + `" />
    
    <div class="overlay">
    <h3>title: `+ movie.title +`</h3>
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


function filterSpecies() {
  const selectedSpecies = document.getElementById("select-species").value;
  const selectedAnimations = document.getElementById("select-animations").value;
  const characters = document.querySelectorAll(".characterBig");
  filterCharacter(characters, selectedSpecies,selectedAnimations);

}

function ordenadosAlfabeto(event){
  const selectOrden = event.target.innerHTML;
  let order= 0;
  if(selectOrden === "A-Z"){
    event.target.innerHTML =  "Z-A";
    order = -1;
  }else{
    event.target.innerHTML =  "A-Z";
    order = 1;
  }
  const characters = document.querySelectorAll(".characterBig");
  const charactersArray = Array.prototype.slice.call(characters, 0);
  const container = document.getElementById("charactersBig");
  filterOrden(charactersArray, container,order)

}

