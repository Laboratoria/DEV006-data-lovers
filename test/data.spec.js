import { suma, getCharacters, ordinationAz, ordinationZa, calculatePercentage, getCharactersByQuery, filterBySpecies,filterByGender } from '../src/data.js';

describe('suma', () => {
  it('is a function', () => {
    expect(typeof suma).toBe('function');
  });

  it('returns the correct sum', () => {
    expect(suma(4,6)).toBe(10);
  });
});

describe('getCharacters', () => {
  it('is a function', () => {
    expect(typeof getCharacters).toBe('function');
  });

  it('returns the correct amount of characters', () => {
    expect(getCharacters().length).toBe(493);
  });
});

describe ('getCharactersByQuery',() => {
  it ('filtra segun el query', () => {
    //GIVEN
    const queryWord = 'rick';
    const exampleData = [
      {name:"Rick Sanchez"},{name:"Morty Smith"},{name:"Alien Rick"}, {name:"Beth Smith"}
    ];
    const expectedData = [{name:"Rick Sanchez"},{name:"Alien Rick"}]
    //WHEN
    const result = getCharactersByQuery(exampleData,queryWord);
    //THEN
    expect(result).toEqual(expectedData);
  })
})  

describe ('ordinationAz',() => {
  it('to order an array from A to Z ',() => {
    const baseData = [
      {name:"Isabella"},{name:"Alejandro"},{name:"Felipe"},{name:"Daniela"}
    ];
    const sortedData = ordinationAz(baseData); 
    const correctData =  [{name:"Alejandro"},{name:"Daniela"},{name: "Felipe"},{name: "Isabella"}];
    expect(sortedData).toEqual(correctData);
  })
})

describe ('ordinationZa',() => {
  it ('to order an array from Z to A',() => {
    const baseData = [
      {name:"Isabella"},{name:"Alejandro"},{name:"Felipe"},{name:"Daniela"}
    ];
    const sortedData = ordinationZa(baseData);
    const correctData = [{name:"Isabella"},{name:"Felipe"},{name:"Daniela"},{name:"Alejandro"}];
    expect(sortedData).toEqual(correctData);
  })
})

describe ('calculatePercentage',() => {
  it('returns an amount in percentage',()=>{
    const numTotal = 53;
    const numPart = 10;
    const resultPercentage = calculatePercentage(numTotal,numPart);
    const correctPercentage = 19;
    expect(resultPercentage).toEqual(correctPercentage);
  })
})

describe ('filterBySpecies',() =>{
  it('return filter by species',() => {
    //GIVEN
    const exampleData = [
      {name:"Rick Sanchez", species: "Human"},{name:"Morty Smith", species: "Human"},
      {name:"Alien Rick", species: "Alien"}, {name:"Beth Smith",species: "Human"}
    ];
    const expectedData= [{name:"Rick Sanchez", species: "Human"},{name:"Morty Smith", species: "Human"},
      {name:"Beth Smith",species: "Human"}];
    //WHEN
    const filterData = filterBySpecies(exampleData, "Human");
    //THEN
    expect(filterData).toEqual(expectedData);
  })
}) 

describe ('filterByGender',() =>{
  it('return filter by gender',() => {
    //GIVEN
    const exampleData = [
      {name:"Rick Sanchez", gender: "Male"},{name:"Morty Smith", gender: "Male"},
      {name:"Alien Rick", gender: "Male"}, {name:"Beth Smith",gender: "Female"}
    ];
    const expectedData= [{name:"Rick Sanchez", gender: "Male"},{name:"Morty Smith", gender: "Male"},
      {name:"Alien Rick", gender: "Male"}];
    //WHEN
    const filterData = filterByGender(exampleData, "Male");
    //THEN
    expect(filterData).toEqual(expectedData);
  })
})