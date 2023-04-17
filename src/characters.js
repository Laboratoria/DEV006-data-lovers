import data from './data/ghibli/ghibli.js';
const dataFilms = data.films;

export function filterCharacters(gender) {
  const charactersTable = document.getElementById("charactersTable");
  if(!charactersTable){
    //console.log("charactersTable element not found")
    return;
  }
  const charactersBody = charactersTable.getElementsByTagName('tbody')[0];
  const genderSelection = document.getElementById("genderSelect").value;

  const filteredCharacters = dataFilms.flatMap(film => {
    return film.people.filter(person => {
      if (gender !== "allGenders") {
        return person.gender === genderSelection} 
      else {
        return true; // Include all characters if gender is "allGenders"
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
    const characterGender = "<p>" + person.gender + "</p>";
    const characterSpecie = "<p>" + person.specie + "</p>";
    const characterAge = "<p>" + person.age + "</p>";

    tableBody = tableBody + characterImg + characterName + characterGender + characterSpecie + characterAge;
    tableBody = tableBody + "</td>";

    if(index % 3 === 2) {
      tableBody = tableBody + "</tr>";
    }
    index++;
  });
  charactersBody.innerHTML = tableBody;
}
filterCharacters("allGenders");

export function filterCharactersBySpecie(specie) {
  const charactersTable = document.getElementById("charactersTable");
  if(!charactersTable){
    //console.log("charactersTable element not found")
    return;
  }
  const charactersBody = charactersTable.getElementsByTagName('tbody')[0];
  const characterSpecieSelection = document.getElementById("charactersSpecieSelect").value;

  const filteredCharacters = dataFilms.flatMap(film => {
    return film.people.filter(person => {
      if (specie !== "allSpecies") {
        return person.specie === characterSpecieSelection} 
      else {
        return true; // Include all characters if gender is "allGenders"
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
filterCharactersBySpecie("allSpecies");



export function sortCharactersByName() {
  const charactersTable = document.getElementById("charactersTable");
  if (!charactersTable) {
    //console.log("charactersTable element not found")
    return;
  }
  const charactersBody = charactersTable.getElementsByTagName("tbody")[0];

  const sortedCharactersByName = dataFilms.flatMap((film) => film.people);
  sortedCharactersByName.sort((a, b) => a.name.localeCompare(b.name));

  let tableBody = "";
  let index = 0;
  sortedCharactersByName.forEach((person) => {
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

    if (index % 3 === 2) {
      tableBody = tableBody + "</tr>";
    }
    index++;
  });
  charactersBody.innerHTML = tableBody;
}



const characters = dataFilms.flatMap(film => film.people) // Aplanar arreglo anidado
  .sort((a, b) => (a.name).localeCompare(b.name)); // Ordenar arreglo por la propiedad 'age'

console.log(characters);

