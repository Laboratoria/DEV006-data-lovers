import dataHP from "./data/harrypotter/data.js";
// console.log(dataHP);

/*mostrar data*/
export const HP = (datos) => {
  console.log('datosp', datos)
  const callByCharacters = datos.characters;
  return callByCharacters;
};
export const charactersData = HP(dataHP);
console.log(charactersData);

/*Filtrar por specie */
export const filterCharacters = (characters, specie) => {
  const newFilter = characters.filter((character) => {
    const result = character.species === specie;
    return result;
  });
  return newFilter;
};


/*Ordenar de A-Z*/
