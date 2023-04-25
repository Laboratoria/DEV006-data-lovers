/*Importar data*/
import { charactersData } from "./data.js";
import { filterCharacters } from "./data.js";
import { sortingCharactersAZ } from "./data.js";
import { sortingCharactersZA } from "./data.js";
/*import { characterPerProperty  } from "./data.js";*/

const selectPerson = document.getElementById("selectPerson");
const divCharacters = document.getElementById("charactersInfo");
const hogwartzlogo = "./images/hogwartzlogo.png";

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
     <img id="hogwartzlogo" src="${hogwartzlogo}" alt="hogwartzlogo">
     <ul>
     <li><strong> ID: </strong> ${characters.id}</li>
     <li><strong>NAME:</strong> ${characters.name}</li>
     <li><strong>BIRTH:</strong> ${characters.birth}</li>
     <li><strong>HOUSE</strong> ${characters.house}</li>
     </ul>
      </div>`;
  });
}

/*llamado de botones next y back*/
export const buttonNext = document.getElementById("next");
buttonNext && buttonNext.addEventListener("click", nextPage);
export const buttonBack = document.getElementById("back");
buttonBack && buttonBack.addEventListener("click", previousPage);
/*personajes por pagina*/
const charactersPerPage = 42;
let page = 0;

/*declaración de la función getScreenCharacters*/
const getScreenCharacters = () => {
  const initialCharacter = page * charactersPerPage;
  const finalCharacter = page * charactersPerPage + charactersPerPage;
  const screenCharacters = charactersData.slice(
    initialCharacter,
    finalCharacter
  );
  return screenCharacters;
};
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

/*FIILTRAR personajes */
let filteredCharacter = charactersData;
const callFilterForCharacters = document.getElementById("selectPerson");
callFilterForCharacters.addEventListener("change", filterByTypeOfPerson);
function filterByTypeOfPerson() {
  const selectPersonValue = selectPerson.value;
  console.log(selectPersonValue);
  switch (selectPersonValue) {
    case "1":
      /*filteredCharacter guarda la información*/
      filteredCharacter = filterCharacters(charactersData, "Human");
      console.log(filterCharacters(charactersData, "Human"));
      break;

    case "2":
      filteredCharacter = filterCharacters(charactersData, "Muggle");
      console.log(filterCharacters(charactersData, "Muggle"));
      break;

    case "3":
      filteredCharacter = filterCharacters(charactersData, "Human (formerly)");
      console.log(filterCharacters(charactersData, "Human (formerly)"));
      break;

    default:
      displayPersonajes(charactersData);
  }
  displayPersonajes(filteredCharacter);
}

console.log(filteredCharacter);
/*Ordenado de personajes de A->Z*/
document.getElementById("selectOrder").addEventListener("click", sortByAZ);
function sortByAZ() {
  sortingCharactersAZ(filteredCharacter, "name");
  displayPersonajes(sortingCharactersAZ(filteredCharacter, "name"));
}

/*Ordenado de personajes de Z->A*/
document.getElementById("selectTwoOrder").addEventListener("click", sortByZA);
function sortByZA() {
  sortingCharactersZA(filteredCharacter, "name");
  displayPersonajes(sortingCharactersZA(filteredCharacter, "name"));
}
