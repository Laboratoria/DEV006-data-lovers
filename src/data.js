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
//input SEARCH buscar por nombre ANTIGUO
/*const btnBuscarByName = document.getElementById('search');
btnBuscarByName.addEventListener('input', (e) =>{
  searchPokByName(e.target.value)
  console.log(e.target.value)
  console.log(searchPokByName(e.target.value))
})
export const searchPokByName = (name) =>{
//metodo startsWidth para buscar por nombre comenzando desde la primera
  const searching = data.pokemon.filter(p => p.name.startsWith(name));
  return searching
};*/



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


//para ordenar AZ CORREGIDO
export function ordenadoAz(name) {
  const ordenado = data.pokemon.sort((pokemon) => {
    if(pokemon.name.localeCompare(name)){
      return pokemon;
    }
  });
  return ordenado;
}
//item order A-Z ANTIGUO
/*const orderAz = document.getElementById('az');
orderAz.addEventListener('click', () => {
  //ordenar la copia por nombre de la A hasta la Z
  const ordenado = data.pokemon.sort((a,b)=> a.name.localeCompare(b.name));
  //mostrar el resultado
  console.log(ordenado);
});*/



//para invertir el orden ZA CORREGIDO
export function ordenInvertidoZa(name) {
  const invertido = data.pokemon.reverse().sort((pokemon) => {
    if(pokemon.name.LocaleCompare(name)){
      return pokemon;
    }
  });
  return invertido;
}
//item order Z-A ANTIGUO
/*const invertirZa = document.getElementById('za');
invertirZa.addEventListener('click', () => {
  const invertido = data.pokemon.reverse().sort((a,b)=> a.name.localeCompare(b.name));
  //mostrar el resultado
  console.log(invertido);
});*/



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



//ordenar ascendentemente
export function ordenarPorNumeroAscendente(data) {
  return data.pokemon.sort((a, b) => a.num - b.num);
}
//item order x NUMERO ascendente ANTIGUO
/*const menorAmayor = document.getElementById('ascendente');
menorAmayor.addEventListener('click', () => {
  const ascending = data.pokemon.sort((a,b) => a.num - b.num);
  console.log(ascending);
});*/

//ordenar descendente
export function ordenarPorNumeroDescendente(data) {
  return data.pokemon.sort((a, b) => b.num - a.num);
}
//item order x NUMERO descendente ANTIGUO
/*const mayorAmenor = document.getElementById('descendente');
mayorAmenor.addEventListener('click', () => {
  const descending = data.pokemon.sort((a,b) => b.num - a.num);
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
