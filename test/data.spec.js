
import { filtradoPorTipo, ordenar, ordenarZa } from '../src/data.js';

describe('filtradoPorTipo', () => {

  it('Devuelve un array solo con los elementos del tipo especificado', () => {

    //Datos de prueba
    const data = [
      { id: 1, type: 'fire' },
      { id: 2, type: 'water' },
      { id: 3, type: 'grass' },
      { id: 4, type: 'fire' }

    ];

    //Tipo a filtrar
    const tipo = 'fire';

    //Mando a llamar la función con los datos de prueba y el tipo a filtrar
    const resultado = filtradoPorTipo(data, tipo);

    //Se comprueba que el resultado es un array con los elementos del tipo especificado
    expect(resultado).toEqual([
      { id: 1, type: 'fire' },
      { id: 4, type: 'fire' }

    ]);
  });

  it('Devuelve un array vacío si no se especifica un tipo', () => {

    //Daros prueba
    const data = [
      { id: 1, type: 'fire' },
      { id: 2, type: 'water' },
      { id: 3, type: 'grass' }
    ];

    // Tipo no especificado
    const tipo = undefined;

    //Llamar a la función con los datos de prueba y el tipo no especificado
    const resultado = filtradoPorTipo(data, tipo);

    //Comprobar que el resultado es un array vacio
    expect(resultado).toEqual([]);
  })

});



const entrada = [{
  "num": "004",
  "name": "charmander",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
  "img": "https://www.serebii.net/pokemongo/pokemon/004.png",
  "size": {
    "height": "0.61 m",
    "weight": "8.5 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "fire"
  ]
},
{
  "num": "001",
  "name": "bulbasaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
  "size": {
    "height": "0.71 m",
    "weight": "6.9 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ]
},
{
  "num": "002",
  "name": "ivysaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
  "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
  "size": {
    "height": "0.99 m",
    "weight": "13.0 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ]
},
]


const salida = [{
  "num": "001",
  "name": "bulbasaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
  "size": {
    "height": "0.71 m",
    "weight": "6.9 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ]
},
{
  "num": "004",
  "name": "charmander",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
  "img": "https://www.serebii.net/pokemongo/pokemon/004.png",
  "size": {
    "height": "0.61 m",
    "weight": "8.5 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "fire"
  ]
}, {
  "num": "002",
  "name": "ivysaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
  "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
  "size": {
    "height": "0.99 m",
    "weight": "13.0 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ]
},

]

const salidaAz = [
  {
    "num": "002",
    "name": "ivysaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
    "size": {
      "height": "0.99 m",
      "weight": "13.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ]
  },
  {
    "num": "004",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    "img": "https://www.serebii.net/pokemongo/pokemon/004.png",
    "size": {
      "height": "0.61 m",
      "weight": "8.5 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "fire"
    ]
  }, {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
    "size": {
      "height": "0.71 m",
      "weight": "6.9 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ]
  },
]

describe("ordenar", () => {
  it("ordenar debe recibir un array como argumento", () => {
    const newArray = ["a", "b", "c"];
    expect(ordenar(newArray));
  })
  it("is a function", () => {
    expect(typeof ordenar).toBe("function");
  });

  it("funcion entrega un array con nombres organizados de la A a la Z", () => {
    expect(ordenar(entrada)).toEqual(salida)
  })
});

describe("ordenar de la Z a la A", () => {
  it("ordenar debe recibir un array como argumento", () => {
    const newArray = ["a", "b", "c"];
    expect(ordenarZa(newArray));
  })
  it("is a function", () => {
    expect(typeof ordenarZa).toBe("function");
  });

  it("funcion entrega un array con nombres organizados de la Z a la A", () => {
    expect(ordenarZa(entrada)).toEqual(salidaAz)
  })
});