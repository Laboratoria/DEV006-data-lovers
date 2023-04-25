import dataHP from "./data/harrypotter/data.js";
// console.log(dataHP);

/*mostrar data*/
export const HP = (datos) => {
  console.log("datosp", datos);
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

/*Contador*/
export const studentsPerProperty = (data, property, propertyValue) => {
  const countByproperty = {};

  data.forEach((character) => {
    /* se comprueba que el valor de la propiedad del personaje actual sea igual que propertyValue buscado*/
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


/*export const characterPerProperty = (data, property) => {
  let countByproperty = data.reduce((accumulator, currentValue) => {
    /*si no existe, se agrega propiedad y se inicializa con 0
    /*if (!accumulator[currentValue[property]]) {
      accumulator[currentValue[property]] = 0;
    }
    accumulator[currentValue[property]]++;
    return accumulator;
    /*el counter inicializa como objeto vacío
    console.log({accu})
  }, {});
};
const resultad = characterPerProperty(charactersData, "house");
console.log(resultad);*/
