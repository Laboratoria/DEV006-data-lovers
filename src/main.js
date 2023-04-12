/*Importar data*/
import { HP } from "./data.js";
import dataHP from "./data/harrypotter/data.js";
console.log(HP)

let selectPerson = document.getElementById("selectPerson");
const divCharacters = document.getElementById("charactersInfo");
const housesLogo = './images/houses_logo.png';

function filterByCharacters(characters) {
  return HP(dataHP.characters, characters);
}

function displayPersonajes(personajes) {
  // la línea de abajo sirve para al realizar una nueva busqueda el contenido anterior se borre
  divCharacters.innerHTML="" 
  personajes.forEach((characters) => {
    /* '+=' indica que el contenido anterior no se eliminará y 
    el contenido nuevo se agrega al final */
        /* '#$' se utiliza para insertar el valor de la propiedad id, name, etc.
     de cada objeto "characters" */ 
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
displayPersonajes(dataHP.characters);

selectPerson.addEventListener("input", () => {
  const characters = selectPerson.value;
  displayPersonajes(filterByCharacters(dataHP.characters, characters));
});
 /*displayPersonajes(filterByCharacters(characters));*/


/*btnAllTypes.addEventListener("click", function () {
 pokemonDiv.innerHTML = "";
 mostrarPokemon(data.pokemon);
 */
/*let charactersInfo = document.getElementById("charactersInfo")
let characterId= CharacterData.[1];*/



