import {getCharacters, getCharactersByQuery, filterBySpecies, filterByGender, 
  filterByStatus, ordinationAz, ordinationZa, calculatePercentage} from "./data.js";

const container = document.querySelector(".container");

function renderCharacters(characters) {
  container.innerHTML = characters.map(character => `
    <div class="card"> 
      <div class="card-body"> 
        <a href=" "> <img src="${character.image}"></a>
        <div>
          <h5 class="card-title">${character.name}</h5>
        </div>
      </div>
    </div>
  `).join("");
} renderCharacters(getCharacters());

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
  const dataCharacters = getCharacters();
  const query = searchInput.value.toLowerCase();
  const filteredCharacters = getCharactersByQuery(dataCharacters,query);
  renderCharacters(filteredCharacters);
});

// Ordenar A-Z 
const orderAz = document.getElementById("A-Z");
orderAz.addEventListener("click", () => {
  const allCharacters = getCharacters();
  const filterCharactersAz = ordinationAz(allCharacters);
  renderCharacters(filterCharactersAz);
});
// Ordenar Z-A
const orderZa = document.getElementById("Z-A");
orderZa.addEventListener("click", () => {
  const allCharacters = getCharacters();
  const filterCharactersZa = ordinationZa(allCharacters);
  renderCharacters(filterCharactersZa);
});
//Filter Human   
const characterHuman= document.getElementById("Human");
characterHuman.addEventListener("click", () => {
  const allCharacters = getCharacters();
  const filterHumanCharacters= filterBySpecies(allCharacters, "Human");
  const percentage= Math.round(calculatePercentage(allCharacters.length, filterHumanCharacters.length));
  const textP = document.getElementById("textPercentage");
  textP.textContent= percentage + "% of the characters are Human";
  renderCharacters(filterHumanCharacters);
});
//Filter Male
const characterMale= document.getElementById("Male");
characterMale.addEventListener("click", () => {
  const allCharacters = getCharacters();
  const filterMaleCharacters= filterByGender(allCharacters,"Male");
  const percentage= calculatePercentage(allCharacters.length, filterMaleCharacters.length);
  const textP = document.getElementById("textPercentage");
  textP.textContent= percentage + "% of the characters are Male";
  renderCharacters(filterMaleCharacters);
});
//Filter Female
const characterFemale= document.getElementById("Female");
characterFemale.addEventListener("click", () => {
  const allCharacters = getCharacters();
  const filterFemaleCharacters=filterByGender(allCharacters,"Female");
  const percentage= Math.round(calculatePercentage(allCharacters.length, filterFemaleCharacters.length));
  const textP = document.getElementById("textPercentage");
  textP.textContent= percentage + "% of the characters are Female";
  renderCharacters(filterFemaleCharacters);
});
//Filter Alive
const characterAlive= document.getElementById("Alive");
characterAlive.addEventListener("click", () => {
  const allCharacters = getCharacters();
  const filterAliveCharacters= filterByStatus(allCharacters,"Alive");
  const percentage= Math.round(calculatePercentage(allCharacters.length, filterAliveCharacters.length));
  const textP = document.getElementById("textPercentage");
  textP.textContent= percentage + "% of the characters are Alive";
  renderCharacters(filterAliveCharacters);
});
//Filter Dead
const characterDead= document.getElementById("Dead");
characterDead.addEventListener("click", () => {
  const allCharacters = getCharacters();
  const filterDeadCharacters= filterByStatus(allCharacters, "Dead");
  const percentage= Math.round(calculatePercentage(allCharacters.length, filterDeadCharacters.length));
  const textP = document.getElementById("textPercentage");
  textP.textContent= percentage + "% of the characters are Dead";
  renderCharacters(filterDeadCharacters);
}); 

 
 