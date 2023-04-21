//import pokemon from "./data/pokemon/pokemon.js";
import data from "./data/pokemon/pokemon.js";
console.log(data.pokemon)
//En el archivo data.js, exporta las funciones de búsqueda y filtrado.

//input SEARCH buscar por nombre 
export function searchPokByName(name) {
  const searching = data.pokemon.filter(p => p.name.startsWith(name));
  return searching;
}
//ordenar de la A-Z
const orderAz = document.getElementById("az");
orderAz.addEventListener("click", () => {
  const ordenado = data.pokemon.sort((a, b) => a.name.localeCompare(b.name));
  console.log(ordenado);
});

//ordenar de la Z-A
const invertirZa = document.getElementById("za");
invertirZa.addEventListener("click", () => {
  const invertido = data.pokemon
    .reverse()
    .sort((a, b) => a.name.localeCompare(b.name));
  console.log(invertido);
});

//ordenar ascendentemente
const menorAmayor = document.getElementById("ascendente");
menorAmayor.addEventListener("click", () => {
  const ascending = data.pokemon.sort((a, b) => a.num - b.num);
  console.log(ascending);
});

//ordenar descendente
const mayorAmenor = document.getElementById("descendente");
mayorAmenor.addEventListener("click", () => {
  const descending = data.pokemon.sort((a, b) => b.num - a.num);
  console.log(descending);
});


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
