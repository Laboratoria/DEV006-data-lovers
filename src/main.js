/*Importar data*/
import { HP } from "./data.js";
import dataHP from "./data/harrypotter/data.js";
console.log(HP)

const selectPerson = document.getElementById("selectPerson");
const divCharacters = document.getElementById("charactersInfo");
const housesLogo = './images/houses_logo.png';

/* Llama a la data */
function callCharacters(characters) {
  return HP(dataHP.characters, characters);
}
/* despliega la data */
function displayPersonajes(personajes) {
  // la línea de abajo sirve para al realizar una nueva busqueda el contenido anterior se borre
  divCharacters.innerHTML = ""
  personajes.forEach((characters) => {
    /* '+=' indica que el contenido anterior no se eliminará y 
    el contenido nuevo se agrega al final */
    /* '$' se utiliza para insertar el valor de la propiedad id, name, etc.
 de cada objeto "characters" */
    /* las comillas inversas `` se utilizan para insertar valores de vbles dentro de una cadena de txto*/
    divCharacters.innerHTML +=
      `<div class="iDCard">
     <img id="housesLogos" src="${housesLogo}" alt="housesLogo">
     <ul>
     <li><strong> ID: </strong> ${characters.id}</li>
     <li><strong>NAME:</strong> ${characters.name}</li>
     <li><strong>BIRTH:</strong> ${characters.birth}</li>
     <li><strong>HOUSE</strong> ${characters.house}</li>
     </ul>
      </div>`;
  })
};

selectPerson.addEventListener("input", () => {
  const characters = selectPerson.value;
  displayPersonajes(callCharacters(dataHP.characters, characters));
});


/*Personajes por página */
const charactersPerPage = 42;
let page = 0;
const initialCharacter = page * charactersPerPage;
const finalCharacter = page * charactersPerPage + charactersPerPage;
const screenCharacters = dataHP.characters.slice(initialCharacter, finalCharacter);

displayPersonajes(screenCharacters);

const buttonNext = document.getElementById("next");
buttonNext.addEventListener("click", nextPage);
const buttonBack = document.getElementById("back");
buttonBack.addEventListener("click", previousPage);

function nextPage() {
  /*Muestra 42 personajes a la vez*/
  page = page + 1;
  let initialCharacter = page * charactersPerPage
  let finalCharacter = page * charactersPerPage + (charactersPerPage)
  let screenCharacters = dataHP.characters.slice(initialCharacter, finalCharacter)
  displayPersonajes(screenCharacters);
  updateButtons();
};

function previousPage() {
  /*Muestra 42 personajes a la vez*/
  if (page > 0) {
    page = page - 1;
    let initialCharacter = page * charactersPerPage
    let finalCharacter = page * charactersPerPage + (charactersPerPage)
    let screenCharacters = dataHP.characters.slice(initialCharacter, finalCharacter)
    displayPersonajes(screenCharacters);
    updateButtons();
  }
}

function updateButtons(){
  
const nextButton = document.querySelector("#next.backNext");
const backButton = document.querySelector("#back.backNext");

/*Quitar y agrega boton next acorde a necesidad */
if (page == 16) {
  nextButton.style.visibility = "hidden";
} else {
  nextButton.style.visibility = "visible";
};
  /*Quitar y agrega boton back acorde a necesidad */
if (page == 0) {
  backButton.style.visibility = "hidden";
} else {
  backButton.style.visibility = "visible";
};
};

console.log("Page value outside function:", page);







/*btnAllTypes.addEventListener("click", function () {
 pokemonDiv.innerHTML = "";
 mostrarPokemon(data.pokemon);
 */
/*let charactersInfo = document.getElementById("charactersInfo")
let characterId= CharacterData.[1];*/



