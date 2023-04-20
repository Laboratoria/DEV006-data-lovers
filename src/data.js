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
const prueba= filterCharacters(charactersData, "Muggle")

/*Ordenar de A->Z*/
export const sortingCharactersAZ = (charactersShowed, sortOrder) => {
  const newSort = charactersShowed.sort((a, b) => {
    if (a.name > b.name) {
      return 1
    }
    if (a.name < b.name) {
      return -1
    } else {
      return 0
    }
  })
  return newSort;
}
sortingCharactersAZ(charactersData, "name")
console.log(sortingCharactersAZ(prueba, "name"))

/*Ordenar de Z->A*/
export const sortingCharactersZA = (charactersShowed, sortOrder) => {
  const newSort = charactersShowed.sort((a, b) => {
    if (a.name > b.name) {
      return -1
    }
    if (a.name < b.name) {
      return 1
    } else {
      return 0
    }
  })
  return newSort;
}
sortingCharactersZA(charactersData, "name")
console.log(sortingCharactersZA(prueba, "name"))
