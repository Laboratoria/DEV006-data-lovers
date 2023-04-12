import data from "./data/harrypotter/data.js";
console.log(data);

export const HP = (dataHP, characters) => {
  const filterCharacters = dataHP.filter((harryPotter) =>harryPotter.characters.includes(characters));
  return filterCharacters;

};

