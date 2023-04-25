import dataRickAndMorty from "./data/rickandmorty/rickandmorty.js"
//console.log(dataRickAndMorty);

export function getCharacters () {
  return dataRickAndMorty.results;
}
export function getCharactersByQuery(query){
  return dataRickAndMorty.results.filter(character =>
    character.name.toLowerCase().includes(query));
}
export function ordinationAz (dataCharacters){
  return dataCharacters.sort((a,b)=>{
    if(a.name < b.name){
      return -1;
    }
    if (a.name > b.name){
      return 1;
    } 
    return 0;
  });
}
export function ordinationZa (dataCharacters){
  return dataCharacters.sort((a,b)=>{
    if(a.name > b.name){
      return -1;
    }
    if (a.name < b.name){
      return 1;
    } 
    return 0;
  });
}
export function filterBySpecies (dataCharacters,species){
  const speciesFilter= dataCharacters.filter((character)=> character.species === species);
  return speciesFilter;
}
export function filterByGender (dataCharacters,gender){
  const genderFilter= dataCharacters.filter((character)=> character.gender === gender);
  return genderFilter;
}
export function filterByStatus(dataCharacters,status){
  const statusFilter= dataCharacters.filter((character)=>character.status === status);
  return statusFilter;
}
