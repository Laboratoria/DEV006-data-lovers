import dataRickAndMorty from "./data/rickandmorty/rickandmorty.js"
//console.log(dataRickAndMorty);

// estas funciones son de ejemplo
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
*/


export function getCharacters () {
  return dataRickAndMorty.results;
}

