import dataHP from "./data/harrypotter/data.js";
// console.log(dataHP);

export const HP = (dataHP) => {
  const callByCharacters = dataHP.characters;
  return callByCharacters;
}; 

/*personajes por pagina*/
const charactersPerPage = 42;
export let page = 0;

/*declaración de la función getScreenCharacters*/
export let getScreenCharacters=()=> {
  let initialCharacter = page * charactersPerPage;
  let finalCharacter = page * charactersPerPage + charactersPerPage;
  let screenCharacters = dataHP.characters.slice(initialCharacter, finalCharacter);
  return screenCharacters;
}










export const filterWizards= dataHP.characters.filter((characters)=>{
  return characters.species=== "Human";
});

export const filterMuggles= dataHP.characters.filter((characters)=>{
  return characters.species=== "Muggle";
});

export const filterGhosts= dataHP.characters.filter((characters)=>{
  return characters.species=== "Human (formerly)";
});




