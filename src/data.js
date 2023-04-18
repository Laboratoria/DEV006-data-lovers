//importar mi bloque gigante de data:
import data from './data/ghibli/ghibli.js';
const dataFilms = data.films;


export function filterByMovies(director) {
  const moviesTable = document.getElementById("moviesTable");
  if (!moviesTable) {
    //console.error("moviesTable element not found");
    return;
  }
  const moviesBody = moviesTable.getElementsByTagName('tbody')[0];
  let filteredFilms = dataFilms;

  if (director !== "allDirectors") {
    filteredFilms = dataFilms.filter(movie => movie.director === director);
  }

  let tableBody = "";
  filteredFilms.forEach((movie, index) => {
    if (index % 3 === 0) {
      tableBody = tableBody + "<tr>"
    }
    tableBody = tableBody + "<td>"

    const posterImg = "<img src='" + movie.poster + "' class='moviePoster'/>"
    const movieTitle = "<h3>" + movie.title + "</h3>";
    const director = "<p> Directed by " + movie.director + "</p>";
    const producer = "<p> Produced by " + movie.producer + "</p>";
    const releaseDate = "<p>" + movie.release_date + "</p>";
    const description = "<p class='justify'>" + movie.description + "</p>";

    tableBody = tableBody + posterImg + movieTitle + director + producer + releaseDate + description;
    tableBody = tableBody + "</td>"

    if (index % 3 === 2) {
      tableBody = tableBody + "</tr>";
    }
  });
  moviesBody.innerHTML = tableBody;
}
filterByMovies("allDirectors");

export function sortMoviesByDateNewestToOldest() {
  dataFilms.sort((a, b) => (b.release_date) - (a.release_date));
}

export function sortMoviesByDateOldestToNewest() {
  dataFilms.sort((a, b) => (a.release_date) - (b.release_date));
}

export function filterCharactersBySpeciesAndGender(specie, gender) {
  const charactersTable = document.getElementById("charactersTable");
  if(!charactersTable){
    //console.log("charactersTable element not found")
    return;
  }
  const charactersBody = charactersTable.getElementsByTagName('tbody')[0];
  const characterSpecieSelection = document.getElementById("charactersSpecieSelect").value;

  const filteredCharacters = dataFilms.flatMap(film => {
    return film.people.filter(person => {
      if (specie !== "allSpecies" && gender !== "allGenders") {
        return person.specie === characterSpecieSelection && person.gender === gender;
      } else if (specie !== "allSpecies") {
        return person.specie === characterSpecieSelection;
      } else if (gender !== "allGenders") {
        return person.gender === gender;
      } else {
        return true; 
      }
    });
  });

  let tableBody = "";
  let index = 0;
  filteredCharacters.forEach((person) => {
    if (index % 3 === 0) {
      tableBody = tableBody + "<tr>";
    }
    tableBody = tableBody + "<td>";

    const characterImg = "<img src='" + person.img + "' class='characterImg'/>";
    const characterName = "<h3>" + person.name + "</h3>";
    const characterGender = "<p> Gender: " + person.gender + "</p>";
    const characterSpecie = "<p> Species: " + person.specie + "</p>";
    const characterAge = "<p> Age: " + person.age + "</p>";
    const characterEyesAndHair = "<p> Eye and hair color: " + person.eye_color + " and " + person.hair_color + "</p>";

    tableBody = tableBody + characterImg + characterName + characterGender + characterSpecie + characterAge + characterEyesAndHair;
    tableBody = tableBody + "</td>";

    if(index % 3 === 2) {
      tableBody = tableBody + "</tr>";
    }
    index++;
  });
  charactersBody.innerHTML = tableBody;
}
filterCharactersBySpeciesAndGender("allSpecies", "allGenders");

export function filterLocationsByClimate(climate) {
  const locationsTable = document.getElementById("locationsTable");
  if (!locationsTable) {
    //console.log("charactersTable element not found")
    return;
  }
  const locationsBody = locationsTable.getElementsByTagName("tbody")[0];
  const locationsClimateSelection = document.getElementById("climateSelect").value;

  const filteredLocations = dataFilms.flatMap((film) => {
    return film.locations.filter(place => {
      if (climate !== "allClimates") {
        return place.climate === locationsClimateSelection;
      } else {
        return true;
      }
    });
  });

  let tBody = "";
  tBody = "";
  let indexOne = 0;
  filteredLocations.forEach((location) => {
    if (indexOne % 2 === 0) {
      tBody = tBody + "<tr>";
    }
    tBody = tBody + "<td>";
    const locationImg = "<img src='" + location.img + "' class='locationImg'/>";
    const locationName = "<h3>" + location.name + "</h3>";
    const locationClimate = "<p> Climate: " + location.climate + "</p>";
    const terrain = "<p> Terrain: " + location.terrain + "</p>";
    const locationSurfaceWater = "<p> Surface water: " + location.surface_water + "</p>";
    tBody = tBody + locationImg + locationName + locationClimate + terrain + locationSurfaceWater;
    tBody = tBody + "</td>";
    if (indexOne % 2 === 1) {
      tBody = tBody + "</tr>";
    }
    indexOne++;
  });
  locationsBody.innerHTML = tBody;
}
filterLocationsByClimate("allClimates");

function vehiclesTableOne() {
  const vehiclesTable = document.getElementById("vehiclesTable");
  if (!vehiclesTable) { 
    return;
  }
  const vehiclesBody = vehiclesTable.getElementsByTagName("tbody")[0];

  const flattenedVehicles = dataFilms.flatMap((film => film.vehicles) 
  );

  let tBody = "";
  tBody = "";
  let indexOne = 0;
  flattenedVehicles.forEach((vehicle) => {
    if (indexOne % 2 === 0) {
      tBody = tBody + "<tr>";
    }
    tBody = tBody + "<td>";
    const vehicleImg = "<img src='" + vehicle.img + "' class='vehicleImg'/>";
    const vehicleName = "<h3>" + vehicle.name + "</h3>";
    const description = "<p class= 'justify'>" + vehicle.description + "</p>";
    const vehicleClass = "<p> Class: " + vehicle.vehicle_class + "</p>";
    //const pilotName = "<p> Pilot name: " + vehicle.pilot + "</p>";
    tBody =
    tBody + vehicleImg + vehicleName + description + vehicleClass;
    tBody = tBody + "</td>";
    if (indexOne % 2 === 1) {
      tBody = tBody + "</tr>";
    }
    indexOne++;
  });
  vehiclesBody.innerHTML = tBody;
}
vehiclesTableOne("");

