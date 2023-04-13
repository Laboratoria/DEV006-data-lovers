//buscar por nombre en minuscula
export function searchPokByName(name, dataList) {
  const result = dataList.pokemon.find(p => p.name.toLowerCase() === name.toLowerCase());
  return result || null;
}



// función para ordenar alfabeticamente de la A-Z
export const orderAz = (dataList) => {
  const resultado = dataList.sort((a, b) => {
    if (a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    else return 0;
  });
  return resultado;
};

export const anotherExample = () => {
  return 'OMG';
};
