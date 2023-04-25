import { searchPokByName, filtradoTipo, filtradoDebilidad, filtradoResistencia, ordenarPorNombreAz, invertirYOrdenarPorNombreZa, ordenarPorNumeroAscendente, ordenarPorNumeroDescendente, calcularFuerza } from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';

//data aleatoria para probarla con los test
const dataPokemon = [
  {
    "num": "173",
    "name": "cleffa",
    "type": "fairy",
    "resistant": [
      "fighting",
      "bug",
      "dragon",
      "dark"
    ],
    "weaknesses": [
      "poison",
      "steel"
    ],
    "stats": {
      "base-attack": "75",
      "base-defense": "79",
      "base-stamina": "137",
      "max-cp": "671",
      "max-hp": "120"
    },
  },
  {
    "num": "067",
    "name": "machoke",
    "type": [
      "fighting"
    ],
    "resistant": [
      "bug",
      "rock",
      "dark"
    ],
    "weaknesses": [
      "flying",
      "psychic",
      "fairy"
    ],
    "stats": {
      "base-attack": "177",
      "base-defense": "125",
      "base-stamina": "190",
      "max-cp": "2031",
      "max-hp": "162"
    },
  },
  {
    "num": "243",
    "name": "raikou",
    "type": [
      "electric"
    ],
    "resistant": [
      "electric",
      "flying",
      "steel"
    ],
    "weaknesses": [
      "ground"
    ],
    "stats": {
      "base-attack": "241",
      "base-defense": "195",
      "base-stamina": "207",
      "max-cp": "3452",
      "max-hp": "175"
    },
  }
];

//Test para ordenar A-Z
describe('orderAz ordena todos los pokemones de la A a la Z' , () => {
  it('Deberia retornar una función', () => {
    expect(typeof ordenarPorNombreAz).toBe('function');
  });

  it('deberia retornar los nombres de los pokemones de la A-Z [cleffa], [machoke], [raikou]', () => {
    const orderAz = ordenarPorNombreAz(dataPokemon,data);
    expect(orderAz[0].name).toEqual('cleffa');
    expect(orderAz[1].name).toEqual('machoke');
    expect(orderAz[2].name).toEqual('raikou');
  });
});

//test para invertir y ordenar Z-A
describe('invertirZa invierte y ordena todos los pokemos de la Z a la A', () => {
  it('is a function', () => {
    expect(typeof invertirYOrdenarPorNombreZa).toBe('function');
  });

  it('returns `los nombres de los pokemones de la Z-A [raikou], [machote], [cleffa]`', () => {
    const invertirZa = invertirYOrdenarPorNombreZa(dataPokemon,data);
    expect(invertirZa[0].name).toEqual('raikou');
    expect(invertirZa[1].name).toEqual('machote');
    expect(invertirZa[2].name).toEqual('cleffa');
  });
});




describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
