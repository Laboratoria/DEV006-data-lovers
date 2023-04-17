/*Importar data*/
import { HP } from "./data.js";
import dataHP from "./data/harrypotter/data.js";
import { filterWizards } from "./data.js";
import { filterMuggles } from "./data.js";
import { filterGhosts } from "./data.js";


const selectPerson = document.getElementById("selectPerson");
const divCharacters = document.getElementById("charactersInfo");
const housesLogo = "./images/houses_logo.png";

/* Llama a la data */
function CallCharacters(characters) {
  return HP(dataHP.characters, characters);
}
/* despliega la data */
function displayPersonajes(personajes) {
  // console.log(personajes);
  // la línea de abajo sirve para al realizar una nueva busqueda el contenido anterior se borre
  divCharacters.innerHTML = "";
  personajes.forEach((characters) => {
    /* forEach es para que realice la funcion por cada elemento del array '+=' indica que el contenido anterior no se eliminará y 
      el contenido nuevo se agrega al final */
    /* '$' se utiliza para insertar el valor de la propiedad id, name, etc.
   de cada objeto "characters" */
    /* las comillas inversas `` se utilizan para insertar valores de vbles dentro de una cadena de txto*/
    divCharacters.innerHTML += `<div class="iDCard">
     <img id="housesLogos" src="${housesLogo}" alt="housesLogo">
     <ul>
     <li><strong> ID: </strong> ${characters.id}</li>
     <li><strong>NAME:</strong> ${characters.name}</li>
     <li><strong>BIRTH:</strong> ${characters.birth}</li>
     <li><strong>HOUSE</strong> ${characters.house}</li>
     </ul>
      </div>`;
  });
}

/*selectPerson.addEventListener("input", () => {
  const characters = selectPerson.value;
  displayPersonajes(CallCharacters(dataHP.characters, characters));
 //console.log("prueba:",CallCharacters(dataHP.characters, characters))
  updateButtons();
});*/
/*personajes por pagina*/
const charactersPerPage = 42;
let page = 0;

/*llamado de botones next y back*/
const buttonNext = document.getElementById("next");
buttonNext.addEventListener("click", nextPage);

const buttonBack = document.getElementById("back");
buttonBack.addEventListener("click", previousPage);

/*declaración de la función getScreenCharacters*/
function getScreenCharacters() {
  const initialCharacter = page * charactersPerPage;
  const finalCharacter = page * charactersPerPage + charactersPerPage;
  const screenCharacters = dataHP.characters.slice(initialCharacter, finalCharacter);
  return screenCharacters
}

displayPersonajes(getScreenCharacters());

function nextPage() {
  /*Muestra 42 personajes a la vez*/
  page++;
  displayPersonajes(getScreenCharacters());
  updateButtons();
}

function previousPage() {
  /*Muestra 42 personajes a la vez*/
  if (page > 0) {
    page--;
    displayPersonajes(getScreenCharacters());
    updateButtons();
  }
}

function updateButtons() {
  const nextButton = document.querySelector("#next");
  const backButton = document.querySelector("#back");

  /*Quitar y agrega boton next acorde a necesidad */
  if (page === 16) {
    nextButton.style.visibility = "hidden";
  } else {
    nextButton.style.visibility = "visible";
  }

  /*Quitar y agrega boton back acorde a necesidad */
  if (page === 0) {
    backButton.style.visibility = "hidden";
  } else {
    backButton.style.visibility = "visible";
  }
}

console.log("Page value outside function:", page);

/*FIILTRAR personajes */
const callFilterForCharacters = document.getElementById("selectPerson");
callFilterForCharacters.addEventListener("change", filterByTypeOfPerson);
function filterByTypeOfPerson() {
  const selectPersonValue=selectPerson.value;
  console.log(selectPersonValue)
  switch (selectPersonValue) {
  case "magos":
    displayPersonajes(filterWizards);
    console.log(filterWizards)
    break;

  case "muggles":
    displayPersonajes(filterMuggles);
    console.log(filterMuggles)
    break;

  case "fantasmas":
    displayPersonajes(filterGhosts);
    console.log(filterGhosts)
    break;

  default:
    CallCharacters(dataHP.characters);
  }
}

/*const selectedGender = event.target.value
  if (selectedGender === "male") {
    console.log(filterMale);
    displayPersonajes(filterMale);
  }
  if (selectedGender === "female") {
    console.log(filterFemale);
    displayPersonajes(filterFemale);
  }
  if (selectedGender === "all") {
    console.log(dataHP.characters);
    displayPersonajes(dataHP.characters);
  }*/

/*displayPersonajes(filterByCharacters(characters));*/

/*btnAllTypes.addEventListener("click", function () {
 pokemonDiv.innerHTML = "";
 mostrarPokemon(data.pokemon);
 */
/*let charactersInfo = document.getElementById("charactersInfo")
let characterId= CharacterData.[1];*/
