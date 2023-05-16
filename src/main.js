import data from "./data/pokemon/pokemon.js"; //ruta
import { pokemonFilter, pokemonSort } from "./data.js";

let filterText = "";

// Retorna una card con los datos de un pokemon
const printCard = (urlPokemon, namePokemon, numberPokemon, typePokemon, height, weight) => { //parametros
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
        <p class="poison"></p>
        <p class="grass"></p>
        <div class="pokemon-size">
        <p class="height">H: ${height}</p>
        <p class="weight">W: ${weight}</p>
        </div>
      </div>
    </div>
  </div>`;
};

// FILTER 

const renderPokemon = () => {
  const result = pokemonFilter(data.pokemon, filterText).map((pokemon) => {
    return printCard(pokemon.img, pokemon.name, pokemon.num, pokemon.type, pokemon.size.height, pokemon.size.weight); //argumentos
  });

  document.getElementById("cards").innerHTML = result.join("");
};

const filterForm = document.getElementById("formSearch");
filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  filterText = document.getElementById("searchInput").value;

  renderPokemon();
});

renderPokemon();

//SORT BY A-z /z-A
const sortForm = document.querySelector(".formSort");
sortForm.addEventListener("change", (event) => {
  const sortValue = event.target.value;
  pokemonSort(data.pokemon, sortValue); // llamamos a la función pokemonSort y actualizamos el orden de los pokemon
  renderPokemon(); // actualizamos la lista de pokemon
});
