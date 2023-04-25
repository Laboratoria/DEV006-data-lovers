import data from "./data/pokemon/pokemon.js";

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

data.pokemon.forEach((pokemon) => {
  document.getElementById("cards").innerHTML += printCard(
    pokemon.img,
    pokemon.name,
    pokemon.num,
    pokemon.type
  );
});
