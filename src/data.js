import dataHP from "./data/harrypotter/data.js";
console.log(dataHP);

export const HP = (dataHP, characters) => {
  const filterByCharacters = dataHP.filter((harryPotter) => harryPotter.characters.includes(characters));
  return filterByCharacters;
}; 


