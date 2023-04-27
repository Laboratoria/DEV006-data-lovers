import {
  searchPokByName,
  filtradoTipo,
  filtradoDebilidad,
  /*filtradoResistencia,*/
  ordenInvertidoZa,
  ordenadoAz,
  /*ordenarPorNumeroDescendente, calcularFuerza,*/ searchPokByNumber,
} from "../src/data.js";

//data aleatoria del data.pokemon para probarla con los test
const dataPokemon = {
  pokemon: [
    {
      num: "067",
      name: "machoke",
      img: "https://www.serebii.net/pokemongo/pokemon/067.png",
      type: ["fighting"],
      resistant: ["bug", "rock", "dark"],
      weaknesses: ["flying", "psychic", "fairy"],
      stats: {
        "base-attack": "177",
        "base-defense": "125",
        "base-stamina": "190",
        "max-cp": "2031",
        "max-hp": "162",
      },
    },
    {
      num: "243",
      name: "raikou",
      img: "https://www.serebii.net/pokemongo/pokemon/243.png",
      type: ["electric"],
      resistant: ["electric", "flying", "steel"],
      weaknesses: ["ground"],
      stats: {
        "base-attack": "241",
        "base-defense": "195",
        "base-stamina": "207",
        "max-cp": "3452",
        "max-hp": "175",
      },
    },
    {
      num: "173",
      name: "cleffa",
      img: "https://www.serebii.net/pokemongo/pokemon/173.png",
      type: ["fairy"],
      resistant: ["fighting", "bug", "dragon", "dark"],
      weaknesses: ["poison", "steel"],
      stats: {
        "base-attack": "75",
        "base-defense": "79",
        "base-stamina": "137",
        "max-cp": "671",
        "max-hp": "120",
      },
    },
  ],
};

//buscar pokemon por name
describe("searchPokByName busca a todos los pokemones por su nombre", () => {
  it("is a function", () => {
    expect(typeof searchPokByName).toBe("function");
  });

  it("returns deberia retornar el nombre del pokemon buscado cleffa para [cleffa]", () => {
    expect(searchPokByName("cleffa", dataPokemon)).toEqual([
      {
        num: "173",
        name: "cleffa",
        img: "https://www.serebii.net/pokemongo/pokemon/173.png",
        type: ["fairy"],
        resistant: ["fighting", "bug", "dragon", "dark"],
        weaknesses: ["poison", "steel"],
        stats: {
          "base-attack": "75",
          "base-defense": "79",
          "base-stamina": "137",
          "max-cp": "671",
          "max-hp": "120",
        },
      },
    ]);
  });
});

//test para buscar por ordenar
describe("searchByNumber busca al pokemón por su numero", () => {
  it("is a function", () => {
    expect(typeof searchPokByNumber).toEqual("function");
  });

  it("debería retornar el numero del pokemon buscado 067 para [067]", () => {
    expect(searchPokByNumber("067", dataPokemon)).toEqual([
      {
        num: "067",
        name: "machoke",
        img: "https://www.serebii.net/pokemongo/pokemon/067.png",
        type: ["fighting"],
        resistant: ["bug", "rock", "dark"],
        weaknesses: ["flying", "psychic", "fairy"],
        stats: {
          "base-attack": "177",
          "base-defense": "125",
          "base-stamina": "190",
          "max-cp": "2031",
          "max-hp": "162",
        },
      },
    ]);
  });
});

//Test para ordenar A-Z
describe("ordenadoAz ordena todos los pokemones por su nombre de la A a la Z", () => {
  it("is a function", () => {
    expect(typeof ordenadoAz).toEqual("function");
  });

  it("returns deberia retornar los nombres de los pokemones de la A-Z cleffa, machote, raikou para [cleffa], [machoke], [raikou]", () => {
    expect(ordenadoAz("cleffa", "machote", "raikou", dataPokemon)).toEqual([
      {
        num: "173",
        name: "cleffa",
        img: "https://www.serebii.net/pokemongo/pokemon/173.png",
        type: ["fairy"],
        resistant: ["fighting", "bug", "dragon", "dark"],
        weaknesses: ["poison", "steel"],
        stats: {
          "base-attack": "75",
          "base-defense": "79",
          "base-stamina": "137",
          "max-cp": "671",
          "max-hp": "120",
        },
      },
      {
        num: "067",
        name: "machoke",
        img: "https://www.serebii.net/pokemongo/pokemon/067.png",
        type: ["fighting"],
        resistant: ["bug", "rock", "dark"],
        weaknesses: ["flying", "psychic", "fairy"],
        stats: {
          "base-attack": "177",
          "base-defense": "125",
          "base-stamina": "190",
          "max-cp": "2031",
          "max-hp": "162",
        },
      },
      {
        num: "243",
        name: "raikou",
        img: "https://www.serebii.net/pokemongo/pokemon/243.png",
        type: ["electric"],
        resistant: ["electric", "flying", "steel"],
        weaknesses: ["ground"],
        stats: {
          "base-attack": "241",
          "base-defense": "195",
          "base-stamina": "207",
          "max-cp": "3452",
          "max-hp": "175",
        },
      },
    ]);
  });
});

/*expect(orderAz[1].name).toEqual("cleffa");
    expect(orderAz[0].name).toEqual("machote");
    expect(orderAz[2].name).toEqual("raikou");*/

//test para invertir y ordenar Z-A
describe("invertirZa invierte y ordena todos los pokemos de la Z a la A", () => {
  it("is a function", () => {
    expect(typeof ordenInvertidoZa).toBe("function");
  });

  it("returns `los nombres de los pokemones de la Z-A [raikou], [machote], [cleffa]`", () => {
    const invertirZa = ordenInvertidoZa(dataPokemon);
    expect(invertirZa[2].name).toEqual("raikou");
    expect(invertirZa[0].name).toEqual("machote");
    expect(invertirZa[1].name).toEqual("cleffa");
  });
});

//filtrado por tipo
describe("selectTipo filtrar todos los pokemones por su tipo", () => {
  it("is a function", () => {
    expect(typeof filtradoTipo).toBe("function");
  });

  it("debería retornar los pokemones según el tipo seleccionado [fighting], [fairy], [electric]", () => {
    const selectTipo = filtradoTipo(dataPokemon);
    expect(selectTipo[0].type).toBe("fighting");
    expect(selectTipo[1].type).toBe("fairy");
    expect(selectTipo[2].type).toBe("electric");
  });
});

//filtrado por debilidad
describe("selectDebilidad filtrar todos los pokemones filtrados por su debilidad", () => {
  it("is a function", () => {
    expect(typeof filtradoDebilidad).toBe("function");
  });

  it("debería retornar todos los pokemones filtrados por su debilidad [flying, psychic, fairy], [poison, steel],[ground]", () => {
    const selectDebilidad = filtradoDebilidad(dataPokemon);
    expect(selectDebilidad[0].weaknesses).toBe("flying, psychic, fairy");
    expect(selectDebilidad[1].weaknesses).toBe("poison, steel");
    expect(selectDebilidad[2].weaknesses).toBe("ground");
  });
});

//filtrado por resistencia
/*describe("selectResistant filtrar a todos los pokemones por su resistencia", () => {
  it("is a function", () => {
    expect(typeof filtradoResistencia).toBe("function");
  });

  it("returns todos los pokemones filtrados por su resistencia  [bug, rock, dark], [fighting, bug, dragon, dark], [electric, flying, steel]", () => {
    //const selectResistant = filtradoResistencia(data,pokemon);
    expect(filtradoResistencia("bug", "rock", "dark").resistant).toBe(
      "bug",
      "rock",
      "dark"
    );
    expect(
      filtradoResistencia("fighting", "bug", "dragon", "dark").resistant
    ).toBe("fighting", "bug", "dragon", "dark");
    expect(filtradoResistencia("electric", "flying", "steel").resistant).toBe(
      "electric",
      "flying",
      "steel"
    );
  });
});*/

/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
