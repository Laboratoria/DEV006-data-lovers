import { getCharacters } from "./data.js";
// getCharacters()

const characters = getCharacters();
//console.log(characters);
const container = document.querySelector(".container");
//console.log(container);

const elements = [];
for (let i=0;i<characters.length; i++){
  const character = characters[i];
  const element = `
   <div class="card"> 
            <div class="card-body"> 
              <a href=" "> <img src="${character.image}"></a>
              <div>
                <h5 class="card-title">${character.name}</h5>
              </div>
            </div>
          </div>
    `;
  elements.push(element);
} 
container.innerHTML = elements.join(""); 


/* container.innerHTML = characters.map(character =>`
    <div class="card"> 
            <div class="card-body"> 
              <a href=" "> <img src="${character.image}"></a>
              <div>
                <h5 class="card-title">${character.name}</h5>
              </div>
            </div>
          </div>
    `
); */

const searchInput = document.getElementById("search-input");
//Funcion anomima / Pasar data.js
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filteredCharacters = characters.faSilter(character =>
    character.name.toLowerCase().includes(query)
  );
  renderCharacters(filteredCharacters);
});

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
}

//Filter Human   
const characterHuman= document.getElementById("Human");
characterHuman.addEventListener("click", () => {
  const filterHumanCharacters= characters.filter(character =>
    character.species === "Human");
  //console.log(filterHumanCharacters);
  renderHumanCharacters(filterHumanCharacters);
});
function renderHumanCharacters(characters) {
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
} 

/*const characterGender= document.getElementById("Gender");
characterGender.addEventListener("click", () => {
  const filterMaleCharacters= characters.filter(character =>
    character.gender === "Male"); */

//Filter Male
const characterMale= document.getElementById("Male");
characterMale.addEventListener("click", () => {
  const filterMaleCharacters= characters.filter(character =>
    character.gender === "Male");
  //console.log(filterMaleCharacters);
  renderMaleCharacters(filterMaleCharacters);
});
function renderMaleCharacters(characters) {
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
} 

//Filter Female
const characterFemale= document.getElementById("Female");
characterFemale.addEventListener("click", () => {
  const filterFemaleCharacters= characters.filter(character =>
    character.gender === "Female");
  //console.log(filterFemaleCharacters);
  renderFemaleCharacters(filterFemaleCharacters);
});
function renderFemaleCharacters(characters) {
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
} 

//Filter Alive
const characterAlive= document.getElementById("Alive");
characterAlive.addEventListener("click", () => {
  const filterAliveCharacters= characters.filter(character =>
    character.status === "Alive");
  //console.log(filterAliveCharacters);
  renderAliveCharacters(filterAliveCharacters);
});
function renderAliveCharacters(characters) {
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
} 

//Filter Dead
const characterDead= document.getElementById("Dead");
characterDead.addEventListener("click", () => {
  const filterDeadCharacters= characters.filter(character =>
    character.status === "Alive");
  //console.log(filterDeadCharacters);
  renderDeadCharacters(filterDeadCharacters);
});
function renderDeadCharacters(characters) {
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
} 