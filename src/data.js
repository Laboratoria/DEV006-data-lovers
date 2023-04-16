import data from "./data/pokemon/pokemon.js";
import {
  searchPokByName,
  orderAz,
  orderZa,
  searchPokByNumber,
  filterByType,
} from 'data.js'
console.log(data)

// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};




const btnBuscarByName = document.getElementById('search');
btnBuscarByName.addEventListener('click', () =>{
})


//buscar por nombre en minuscula
export const searchPokByName = (name, dataList) =>{
  const searching = dataList.pokemon.find(p => p.name.toLowerCase() === name.toLowerCase());
  return searching || null;
};

// función para ordenar alfabeticamente de la A-Z
export const orderAz = (dataList) => {
//creamos otra constante para guardar el resultado de la función
  const resultado = dataList.sort((a, b) => {
    if (a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    else return 0;
  });
  return resultado;
};

//función invertir orden de la Z a la A
export const orderZa = (dataList) => {
const result = dataList.sort((a, b) => {
  if (a.name < b.name) return 1;
  if(a.name > b.name) return -1;
  else return 0;
});
return result;
};