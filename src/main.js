/*Importar data*/
import { HP } from "./data.js";
import dataHP from "./data/harrypotter/data.js";
console.log(HP)

let selectPerson = document.getElementById("selectPerson");
const divCharacters = document.getElementById("charactersInfo");

function filterByCharacters(characters, filter) {
  return HP(dataHP.characters, characters);
}

function displayPersonajes(personajes) {
  personajes.forEach((characters) => {
    /* '+=' indica que el contenido anterior no se eliminará y 
    el contenido nuevo se agrega al final */
        /* '#$' se utiliza para insertar el valor de la propiedad id, name, etc.
     de cada objeto "characters" */ 
    charactersInfo.innerHTML += `<div id="charactersInfo">
        #${characters.id}
        #${characters.name}
        #${characters.birth}
        #${characters.house}
      </div>`;
  })
};

selectPerson.addEventListener("input", () => {
  let characters = selectPerson.value;
  displayPersonajes(filterByCharacters(dataHP.characters, characters));
});

displayPersonajes(dataHP.characters);
 /*displayPersonajes(filterByCharacters(characters));*/


/*btnAllTypes.addEventListener("click", function () {
 pokemonDiv.innerHTML = "";
 mostrarPokemon(data.pokemon);
 */
/*let charactersInfo = document.getElementById("charactersInfo")
let characterId= CharacterData.[1];*/



