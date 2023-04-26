import { filtrado, sortBy, contarRol } from '../src/funciones.js';


//TEST FILTRADO
const entrada = ("venusaur")


const salida = [
  {
    "num": "003",
    "name": "venusaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    "img": "https://www.serebii.net/pokemongo/pokemon/003.png",
    "size": {
      "height": "2.01 m",
      "weight": "100.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
    "encounter": {
      "base-flee-rate": "0.05",
      "base-capture-rate": "0.05"
    },
    "spawn-chance": "0.017",
    "stats": {
      "base-attack": "198",
      "base-defense": "189",
      "base-stamina": "190",
      "max-cp": "2720",
      "max-hp": "162"
    },
    "resistant": [
      "water",
      "electric",
      "grass",
      "fighting",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "quick-move": [
      {
        "name": "razor leaf",
        "type": "grass",
        "base-damage": "13",
        "energy": "7",
        "move-duration-seg": "1"
      },
      {
        "name": "vine whip",
        "type": "grass",
        "base-damage": "7",
        "energy": "6",
        "move-duration-seg": "0.6"
      }
    ],
    "special-attack": [
      {
        "name": "sludge bomb",
        "type": "poison",
        "base-damage": "80",
        "energy": "-50",
        "move-duration-seg": "2.3"
      },
      {
        "name": "petal blizzard",
        "type": "grass",
        "base-damage": "110",
        "energy": "-100",
        "move-duration-seg": "2.6"
      },
      {
        "name": "solar beam",
        "type": "grass",
        "base-damage": "180",
        "energy": "-100",
        "move-duration-seg": "4.9"
      }
    ],
    "egg": "not in eggs",
    "buddy-distance-km": "3",
    "evolution": {
      "candy": "bulbasaur candy",
      "prev-evolution": [{
        "num": "002",
        "name": "ivysaur",
        "candy-cost": "100",
        "prev-evolution": [{
          "num": "001",
          "name": "bulbasaur",
          "candy-cost": "25"
        }]
      }]
    }
  }
]



describe('probando filtrado', () => {
  it('Debe devolver el nombre venusaur', () => {
    expect(filtrado(entrada)).toEqual(salida);
  });

  it('Debe devolver no se encontró cuando ingrese un string vacio o un nombre equivocado', () => {
    expect(filtrado("hola")).toBe("No se encontró");
  });
});

//TEST ORDENADO

const entrada2 = [
  { "name": "charmander" },
  { "name": "charmeleon" },
  { "name": "bulbasaur" },
  { "name": "hypno" },
  { "name": "voltorb" }
]
const pokemonesAZ = [
  { "name": "bulbasaur" },
  { "name": "charmander" },
  { "name": "charmeleon" },
  { "name": "hypno" },
  { "name": "voltorb" }
]
const pokemonesZA = [
  { "name": "voltorb" },
  { "name": "hypno" },
  { "name": "charmeleon" },
  { "name": "charmander" },
  { "name": "bulbasaur" }
]

describe('probando sort', () => {
  it('debe organizar los pokemones de la A-Z', () => {
    expect(sortBy(entrada2, "asc")).toStrictEqual(pokemonesAZ);
  });

  it('debe orgamizar los pokemones de la Z-A', () => {
    expect(sortBy(entrada2, "desc")).toStrictEqual(pokemonesZA);
  });

});
//TEST CALCULO AGREGADO


const entrada3 = [  ["Assassin"],
  ["Assassin", "Mage"],
  ["Tank", "Mage"],
  ["Support", "Mage"]
];

const salida3 = "75.00%";

describe('probando calculo agregado', () => {
  it('Debe traer el porcentaje de los roles', () => {
    expect(contarRol(entrada3, "Mage")).toBe(salida3);
  });
});

