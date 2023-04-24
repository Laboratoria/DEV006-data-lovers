import dataHP from "./data/harrypotter/data.js";

/*mostrar data*/
export const HP = (datos) => {
  const callByCharacters = datos.characters;
  return callByCharacters;
};
export const charactersData = HP(dataHP);

/*Filtrar por specie */
export const filterCharacters = (characters, specie) => {
  const newFilter = characters.filter((character) => {
    const result = character.species === specie;
    return result;
  });
  return newFilter;
};

/*Ordenar de A->Z*/
export const sortingCharactersAZ = (charactersShowed) => {
  const newSort = charactersShowed.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  });
  return newSort;
};

/*Ordenar de Z->A*/
export const sortingCharactersZA = (charactersShowed) => {
  const newSort = charactersShowed.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    } else {
      return 0;
    }
  });
  return newSort;
};

/*Mostrar cantidad de estudiantes por escuela*/

/*Contador*/
/*Contador*/
export const studentsPerProperty = (data, property, propertyValue) => {
  const countByproperty = {};

  data.forEach((character) => {
    if (character[property] === propertyValue) {
      /* Verifica si la casa ya se encuentra en vble. forEach accede a la propeidad del ojeto correspondiente a la casa del estudiante actual*/
      if (countByproperty[character[property]]) {
        countByproperty[character[property]]++;
      } else {
        /*si la casa no existe, comienza el contador en 1*/
        countByproperty[character[property]] = 1;
      }
    }
  });
  return countByproperty;
};

const countByproperty = studentsPerProperty(charactersData, "house","Gryffindor");
console.log(countByproperty);


