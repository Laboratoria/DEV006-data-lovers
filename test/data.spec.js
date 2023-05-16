import { pokemonFilter, pokemonSort } from '../src/data.js';

const mockData = [
  { "name": "bulbasaur" },
  { "name": "ivysaur" },
  { "name": "venusaur" },
];

describe('pokemonFilter', () => {
  it('es una función', () => {
    expect(typeof pokemonFilter).toBe('function');
  });

  it('filtra un array por la propiedad name', () => {
    const filterName = pokemonFilter(mockData, "bulbasaur");
    const expectedResult = [{ "name": "bulbasaur" }];
    expect(filterName).toEqual(expectedResult);
  });

  it('filtra correctamente por otros nombres de Pokémon', () => {
    const filterName = pokemonFilter(mockData, "ivysaur");
    const expectedResult = [{ "name": "ivysaur" }];
    expect(filterName).toEqual(expectedResult);
  });

  it('devuelve un array vacío cuando el nombre de Pokémon no existe', () => {
    const filterName = pokemonFilter(mockData, "pikachu");
    const expectedResult = [];
    expect(filterName).toEqual(expectedResult);
  });
});


//SORT

describe('pokemonSort', () => {
  const pokemonList = [
    {"name": "Charmander"},
    {"name": "Bulbasaur"},
    {"name": "Squirtle"}
  ];
  
  it('ordena la lista de pokémon de A a Z', () => {
    const expected = [
      {"name": "Bulbasaur"},
      {"name": "Charmander"},
      {"name": "Squirtle"}
    ];
    expect(pokemonSort(pokemonList, 'A-z')).toEqual(expected);
  });
  
  it('ordena la lista de pokémon de Z a A', () => {
    const expected = [
      {"name": "Squirtle"},
      {"name": "Charmander"},
      {"name": "Bulbasaur"}
    ];
    expect(pokemonSort(pokemonList, 'Z-a')).toEqual(expected);
  });
});
