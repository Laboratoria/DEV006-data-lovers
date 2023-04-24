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
const prueba = filterCharacters(charactersData, "Muggle")

/*Ordenar de A->Z*/
export const sortingCharactersAZ = (charactersShowed) => {
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
console.log(sortingCharactersAZ(prueba, "name"))

/*Ordenar de Z->A*/
export const sortingCharactersZA = (charactersShowed) => {
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

console.log(sortingCharactersZA(prueba, "name"))

/*Cálculo estudiantes por Casa*/
/*export const studentsPerHouse = ()=>{
let countByHouse={}  ;

charactersData.forEach((character) => {
 Verifica si la casa ya se encuentra en vble. forEach accede a la propeidad del ojeto correspondiente a la casa del estudiante actual
if (countByHouse[character.house]){
  countByHouse[character.house]++;
}else{
  si la casa no existe, comienza el contador en 1
  countByHouse[character.house] = 1;
}
});
return countByHouse;
};*/

/*Contador*/
export const studentsPerProperty = (data, property, propertyValue) => {
  let countByproperty = {};

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

const countByproperty = studentsPerProperty(charactersData, "house","Gryffindor");
console.log(countByproperty);

/*export const characterPerProperty = (data, property) => {
  let countByproperty = data.reduce((counter, character) => {
      si no existe, se agrega propiedad y se inicializa con 0
      if (!counter[character[property]]) {
        counter[character[property]] = 0;
      }
      counter[character[property]]++;
      return counter;
    el counter inicializa como objeto vacío
  }, {});
}
const countByproperty = characterPerProperty(charactersData, "house");
console.log(countByproperty)*/
