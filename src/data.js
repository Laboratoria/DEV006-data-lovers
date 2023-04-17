import dataHP from "./data/harrypotter/data.js";
// console.log(dataHP);

export const HP = (dataHP) => {
  const callByCharacters = dataHP.characters;
  return callByCharacters;
}; 

export const filterWizards= dataHP.characters.filter((characters)=>{
  return characters.species=== "Human";
});

export const filterMuggles= dataHP.characters.filter((characters)=>{
  return characters.species=== "Muggle";
});

export const filterGhosts= dataHP.characters.filter((characters)=>{
  return characters.species=== "Human (formerly)";
});

