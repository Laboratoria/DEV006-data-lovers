/* eslint-disable no-console */
//import pokemon from "./data/pokemon/pokemon.js";
import data from "./data/pokemon/pokemon.js";
console.log(data.pokemon)
//En el archivo data.js, exporta las funciones de búsqueda y filtrado.

//input SEARCH buscar por nombre
export function searchPokByName(name) {
  const searching = data.pokemon.filter(p => p.name.startsWith(name));
  if(searching.length === 0){
    const modal = document.querySelector('.modal');
    const msj= document.querySelector('#msj');
    msj.textContent = `No se encontró ningún Pokémon con el nombre '${name}'`;
    modal.style.display ='block';
  }
  return searching;
}


//input search by number
//CONVERTIR EL STRING DEL INPUT EN NUMERO
//filtrar toda la data por el numero que se convirtio
//    durante el filtrado comparar el numero convertido con la propiedad num del pokemon convertida en numero tbn
export function searchPokByNumber(num){
  const searchingNumber = Number(num);
  const searching = data.pokemon.filter(p => searchingNumber === Number(p.num));
  if(searching.length===0){
    const modal = document.querySelector('.modal');
    const msj = document.querySelector('#msj');
    msj.textContent = `No se encontró ningún Pokémon con el numero '${Number}'`;
    modal.style.display = 'block';
  }
  return searching;
}

//filtrado por tipo
export function filtradoTipo(type) {
  const filtrado = data.pokemon.filter((pokemon) =>{
    if(pokemon.type.includes(type)){
      return pokemon;
    }
  });
  return filtrado;
}


//filtar por debilidad
export function filtradoDebilidad(weaknesses) {
  const filtradoWeaknesses = data.pokemon.filter((pokemon) => {
    if(pokemon.weaknesses.includes(weaknesses)){
      return pokemon;
    }
  });
  return filtradoWeaknesses;
}


//filtrar por fortaleza
export function filtradoResistencia(resistant){
  const filtradoResistant = data.pokemon.filter((pokemon)=> {
    if(pokemon.resistant.includes(resistant)){
      return pokemon;
    }
  });
  return filtradoResistant;
}

//ordenar de la A-Z
export function ordenarPorNombreAz(data) {
  return data.pokemon.sort((a, b) => a.name.localeCompare(b.name));
}
/*const orderAz = document.getElementById("az");
orderAz.addEventListener("click", () => {
  const ordenado = data.pokemon.sort((a, b) => a.name.localeCompare(b.name));
  console.log(ordenado);
});*/

//ordenar de la Z-A
export function invertirYOrdenarPorNombreZa(data) {
  return data.pokemon.reverse().sort((a, b) => b.name.localeCompare(a.name));
}
/*const invertirZa = document.getElementById("za");
invertirZa.addEventListener("click", () => {
  const invertido = data.pokemon
    .reverse()
    .sort((a, b) => a.name.localeCompare(b.name));
  console.log(invertido);
});*/

//ordenar ascendentemente
export function ordenarPorNumeroAscendente(data) {
  return data.pokemon.sort((a, b) => a.num - b.num);
}
/*const menorAmayor = document.getElementById("ascendente");
menorAmayor.addEventListener("click", () => {
  const ascending = data.pokemon.sort((a, b) => a.num - b.num);
  console.log(ascending);
});*/

//ordenar descendente
export function ordenarPorNumeroDescendente(data) {
  return data.pokemon.sort((a, b) => b.num - a.num);
}
/*const mayorAmenor = document.getElementById("descendente");
mayorAmenor.addEventListener("click", () => {
  const descending = data.pokemon.sort((a, b) => b.num - a.num);
  console.log(descending);
});*/

//calcular la fuerza
export function calcularFuerza(data) {
  const baseAttack = parseInt(data.stats['base-attack']);
  const baseDefense = parseInt(data.stats['base-defense']);
  const baseStamina = parseInt(data.stats['base-stamina']);
  const maxCp = parseInt(data.stats['max-cp']);
  const fuerza = (baseAttack * baseDefense * Math.sqrt(baseStamina) * maxCp**2 / 10**8);
  return fuerza;
}
