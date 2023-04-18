import dataHP from "./data/harrypotter/data.js";
// console.log(dataHP);

/*no se nombra en demás funciones pero es necesario*/
export const HP = (datos) => {
  const callByCharacters = datos.characters;
  return callByCharacters;
}; 
export const charactersData= HP(dataHP)
console.log(charactersData)

export const filterWizards= dataHP.characters.filter((characters)=>{
  return characters.species=== "Human";
});

export const filterMuggles= dataHP.characters.filter((characters)=>{
  return characters.species=== "Muggle";
});

export const filterGhosts= dataHP.characters.filter((characters)=>{
  return characters.species=== "Human (formerly)";
});

export const filterCharacters =(characters,specie)=>{
const newFilter = characters.filter((character)=>{
    const result = character.species===specie
    return result
})
return newFilter
}

const humans = filterCharacters(charactersData,"Muggle")
