/* eslint-disable no-console */
import data from './data/pokemon/pokemon.js';

//filter

export const datos = data.pokemon;
export const datosNombres = data.pokemon.name;


export function filtrado(nombrePokemon) {
  const pokemons = datos.filter(pokemon => nombrePokemon === pokemon.name);
  if (pokemons.length === 0) {
    return "No se encontró";

  } else {
    return pokemons;
  }

}
const resultados = filtrado("hola");
console.log(resultados)

//Sort

export function sortBy(datos, ordenPokemon) {
  return datos.sort((a, b) => {
    if (ordenPokemon === "asc") {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      }
    }
    if (ordenPokemon === "desc") {
      if (a.name < b.name) {
        return 1;
      } else if (a.name > b.name) {
        return -1;
      }
    }
  });
}
const resultados2 = sortBy([
  { "name": "charmander" },
  { "name": "charmeleon" },
  { "name": "bulbasaur" },
  { "name": "hypno" },
  { "name": "voltorb" }
], "desc")
console.log(resultados2)

//calculo agregado

export function contarRol(datos, rol) {
  let count = 0;
  for (let i = 0; i < datos.length; i++) {
    if (datos[i].includes(rol)) {
      count++;
    }
  }
  return ((count * 100) / datos.length).toFixed(2) + '%';
}