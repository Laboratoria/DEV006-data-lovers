

import data from "./data/pokemon/pokemon.js";
import {pokemonFilter, pokemonSort} from "./data.js"



let filterText = "";  //utilizamos para traer form 

const printCard = (urlPokemon, namePokemon, numberPokemon, typePokemon) => {
  return `<div class="card">
    <img
      src="${urlPokemon}"
      alt="${name}" class="pokemon-img"
    />
    <div class="pokemon-info">
      <p class="pokemon-number">N°${numberPokemon}</p>
      <p class="pokemon-name">${namePokemon}</p>
      <div class="pokemon-type">
        <p class="fire">${typePokemon}</p>
      </div>
    </div>
  </div>`;
};


const renderPokemon = () => {
  const result = pokemonFilter(data.pokemon, filterText).map((pokemon) => {
    return printCard (pokemon.img, pokemon.name,pokemon.num, pokemon.type);
  });
  document.getElementById ("cards").innerHTML= result.join ("");  //join convierte de arreglo a string
};


const filterForm = document.getElementById("formSearch");
filterForm.addEventListener ("submit", (event) => {
  event.preventDefault();
  filterText = document.getElementById ("searchInput").value;
  renderPokemon();  
});
renderPokemon ()

