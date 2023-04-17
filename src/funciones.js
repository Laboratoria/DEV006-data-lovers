import data from './data/pokemon/pokemon.js';

//filter

export const datos = data.pokemon;

export function filtrado(nombrePokemon){
  const pokemons = datos.filter(pokemon => nombrePokemon  === pokemon.name);
  if (pokemons.length === 0){
    return [];
  }
  
}
const resultados = filtrado("");
console.log(resultados)
