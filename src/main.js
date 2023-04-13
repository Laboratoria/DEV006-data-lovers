/*Importar data*/
import { HP } from "./data.js";
import dataHP from "./data/harrypotter/data.js";
console.log(HP);

let selectPerson = document.getElementById("selectPerson");
const divCharacters = document.getElementById("charactersInfo");
const housesLogo = "./images/houses_logo.png";

/* Llama a la data */
function CallCharacters(characters) {
  return HP(dataHP.characters, characters);
}
/* despliega la data */
function displayPersonajes(personajes) {
  // la línea de abajo sirve para al realizar una nueva busqueda el contenido anterior se borre
  divCharacters.innerHTML = "";
  personajes.forEach((characters) => {
    /* '+=' indica que el contenido anterior no se eliminará y 
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

selectPerson.addEventListener("input", () => {
  const characters = selectPerson.value;
  displayPersonajes(CallCharacters(dataHP.characters, characters));
});

let charactersPerPage = 42;
let page = 0;
let initialCharacter = page * charactersPerPage;
let finallCharacter = page * charactersPerPage + (charactersPerPage - 1);
let screenCharacters = dataHP.characters.slice(
  initialCharacter,
  finallCharacter
);

displayPersonajes(screenCharacters);

document.getElementById("");
function nextPage() {}

/*displayPersonajes(filterByCharacters(characters));*/

/*btnAllTypes.addEventListener("click", function () {
 pokemonDiv.innerHTML = "";
 mostrarPokemon(data.pokemon);
 */
/*let charactersInfo = document.getElementById("charactersInfo")
let characterId= CharacterData.[1];*/
