import { searchPokByName, filtradoTipo, filtradoDebilidad, filtradoResistencia, ordenarPorNombreAz, invertirYOrdenarPorNombreZa, ordenarPorNumeroAscendente, ordenarPorNumeroDescendente, calcularFuerza } from '../src/data.js';

//data aleatoria para probarla con los test
const dataPokemon = [
  {
    "num": "173",
    "name": "cleffa",
    "type": [
      "fairy"
    ],
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

//filtrado por tipo
describe('selectTipo filtrar todos los pokemones por su tipo', () => {
  it('is a function', () => {
    expect(typeof filtradoTipo).toBe('function');
  });

  it('debería retornar los pokemones según el tipo seleccionado [fairy], [fighting], [electric]', () => {
    const selectTipo = filtradoTipo(dataPokemon);
    expect(selectTipo[0].type).toBe('fairy');
    expect(selectTipo[1].type).toBe('fighting');
    expect(selectTipo[2].type).toBe('electric');
  });
});

//filtrado por debilidad
describe('selectDebilidad filtrar todos los pokemones filtrados por su debilidad', () => {
  it('is a function', () => {
    expect(typeof filtradoDebilidad).toBe('function');
  });

  it('debería retornar todos los pokemones filtrados por su debilidad [poison, steel],[flying, psychic, fairy],[ground]', () => {
    const selectDebilidad = filtradoDebilidad(dataPokemon);
    expect(selectDebilidad[0]).toBe('poison, steel');
    expect(selectDebilidad[1]).toBe('flying, psychic, fairy');
    expect(selectDebilidad[2]).toBe('ground]');
  });
});



//Test para ordenar A-Z
describe('orderAz ordenar todos los pokemones por su nombre de la A a la Z', () =>
it('is a function', () => {
  expect(typeof ordenarPorNombreAz).toBe('function');
});

  it('deberia retornar los nombres de los pokemones ordenados de la A a la Z [cleffa], [machoke], [raikou]', () => {
    const orderAz = ordenarPorNombreAz(dataPokemon);
    expect(orderAz[0].name).toBe('cleffa');
    expect(orderAz[1].name).toBe('machoke');
    expect(orderAz[2].name).toBe('raikou');
});
});



/*describe('orderAz ordena todos los pokemones de la A a la Z' , () => {
  it('is a function', () => {
    expect(typeof ordenarPorNombreAz).toBe('function');
  });

  it('deberia retornar los nombres de los pokemones de la A-Z [cleffa], [machoke], [raikou]', () => {
    const orderAz = ordenarPorNombreAz(dataPokemon);
    expect(orderAz[0].name).toEqual('cleffa');
    expect(orderAz[1].name).toEqual('machote');
    expect(orderAz[2].name).toEqual('raikou');
  });
});*/


//test para invertir y ordenar Z-A
describe('invertirZa invierte y ordena todos los pokemos de la Z a la A', () => {
  it('is a function', () => {
    expect(typeof invertirYOrdenarPorNombreZa).toBe('function');
  });

  it('returns `los nombres de los pokemones de la Z-A [raikou], [machote], [cleffa]`', () => {
    const invertirZa = invertirYOrdenarPorNombreZa(dataPokemon);
    expect(invertirZa[2].name).toEqual('raikou');
    expect(invertirZa[1].name).toEqual('machote');
    expect(invertirZa[0].name).toEqual('cleffa');
  });
});




/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
