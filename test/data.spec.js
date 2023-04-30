import {
  searchPokByName,
  searchPokByNumber,
  ordenadoAz,
  invertirYOrdenarPorNombreZa,
  ordenarPorNumeroAscendente,
  ordenarPorNumeroDescendente,
  filtradoTipo,
  filtradoDebilidad,
  filtradoResistencia,
} from "../src/data.js";
jest.mock("../src/data/pokemon/pokemon.js", () => {
  return {
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
});

//buscar pokemon por name
describe("searchPokByName busca a todos los pokemones por su nombre", () => {
  it("is a function", () => {
    expect(typeof searchPokByName).toBe("function");
  });

  it("returns deberia retornar el nombre del pokemon buscado cleffa para [cleffa]", () => {
    expect(searchPokByName("cleffa")).toEqual([
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

//test para buscar por numero
describe("searchByNumber busca al pokemón por su numero", () => {
  it("is a function", () => {
    expect(typeof searchPokByNumber).toEqual("function");
  });

  it("debería retornar el numero del pokemon buscado 67 para [067]", () => {
    expect(searchPokByNumber("67")).toEqual([
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
describe("ordenadoAz ordena todos los pokemones por orden alfabético", () => {
  it("is a function", () => {
    expect(typeof ordenadoAz).toBe("function");
  });

  it("returns una matriz de pokemon ordenada alfabeticamente ascendente [cleffa], [machoke], [raikou]", () => {
    const resultadoOrdenadoAz = ordenadoAz(); //arreglo de pokemon ordenado
    const primerPokemonDespuesdeOrdenar = resultadoOrdenadoAz[0];
    const segundoPokemonDespuesdeOrdenar = resultadoOrdenadoAz[1];
    const tercerPokemonDespuesdeOrdenar = resultadoOrdenadoAz[2];
    expect(primerPokemonDespuesdeOrdenar.name).toBe("cleffa");
    expect(segundoPokemonDespuesdeOrdenar.name).toBe("machoke");
    expect(tercerPokemonDespuesdeOrdenar.name).toBe("raikou");
  });
});

//test para invertir y ordenar Z-A
describe("invertirZa invierte y ordena todos los pokemos de la Z a la A", () => {
  it("is a function", () => {
    expect(typeof invertirYOrdenarPorNombreZa).toBe("function");
  });

  it("returns los nombres de los pokemones de la Z-A [raikou], [machote], [cleffa]", () => {
    const resultadoinvertirYOrdenarPorNombreZa = invertirYOrdenarPorNombreZa(); //arreglo de pokemon ordenado de Z a A
    const primerPokemonOrdenInvertido = resultadoinvertirYOrdenarPorNombreZa[0];
    const segundoPokemonOrdenInvertido =
      resultadoinvertirYOrdenarPorNombreZa[1];
    const tercerPokemonOrdenInvertido = resultadoinvertirYOrdenarPorNombreZa[2];
    expect(primerPokemonOrdenInvertido.name).toBe("raikou");
    expect(segundoPokemonOrdenInvertido.name).toBe("machoke");
    expect(tercerPokemonOrdenInvertido.name).toBe("cleffa");
  });
});

//test para ordenar ascendentemente por numero
describe("ordenarPorNumeroAscendente del 1 al 251", () => {
  it("is a function", () => {
    expect(typeof ordenarPorNumeroAscendente).toBe("function");
  });

  it("returns los numeros de los pokemones ordenados del 1 al 251 para [067], [173] [243]", () => {
    const resultadoOrdenadoPorNumero = ordenarPorNumeroAscendente();
    const primerNumeroDePokemonOrdenado = resultadoOrdenadoPorNumero[0];
    const segundoNumeroDePokemonOrdenado = resultadoOrdenadoPorNumero[1];
    const tercerNumeroPokemonOrdenado = resultadoOrdenadoPorNumero[2];
    expect(primerNumeroDePokemonOrdenado.num).toBe("067");
    expect(segundoNumeroDePokemonOrdenado.num).toBe("173");
    expect(tercerNumeroPokemonOrdenado.num).toBe("243");
  });
});

//test para ordenar descendentemente por numero
describe("ordenarPorNumeroDescendente del 251 al 1", () => {
  it("is a function", () => {
    expect(typeof ordenarPorNumeroDescendente).toBe("function");
  });

  it("returns los numeros de pokemones ordenados del 251 al 1 para [243], [173], [067]", () => {
    const resultadoOrdenadoDescendente = ordenarPorNumeroDescendente();
    const primerPokemonOrdenDescentente = resultadoOrdenadoDescendente[0];
    const segundoPokemonOrdenDescentente = resultadoOrdenadoDescendente[1];
    const tercerPokemonOrdenDescentente = resultadoOrdenadoDescendente[2];
    expect(primerPokemonOrdenDescentente.num).toBe("243");
    expect(segundoPokemonOrdenDescentente.num).toBe("173");
    expect(tercerPokemonOrdenDescentente.num).toBe("067");
  });
});

//filtrado por tipo
describe("filtradoTipo filtrar todos los pokemones por su tipo", () => {
  it("is a function", () => {
    expect(typeof filtradoTipo).toBe("function");
  });

  it("debería retornar todos los pokemones según el tipo seleccionado fighting para [fighting]", () => {
    const type = "fighting";
    const pokemonFiltrado = filtradoTipo(type);
    const esperado = pokemonFiltrado.filter((pokemon) =>
      pokemon.type.includes(type)
    );
    expect(pokemonFiltrado).toEqual(esperado);
  });
});

//filtrado por debilidad
describe("filtradoDebilidad filtrar todos los pokemones filtrados por su debilidad", () => {
  it("is a function", () => {
    expect(typeof filtradoDebilidad).toBe("function");
  });

  it("debería retornar todos los pokemones filtrados por su debilidad ground para [ground]", () => {
    const weaknesses = "ground";
    const debilidadPokemon = filtradoDebilidad(weaknesses);
    const resultado = debilidadPokemon.filter((pokemon) =>
      pokemon.weaknesses.includes(weaknesses)
    );
    expect(debilidadPokemon).toEqual(resultado);
  });
});

//filtrado por resistencia
describe("filtradoResistencia filtrar a todos los pokemones por su resistencia", () => {
  it("is a function", () => {
    expect(typeof filtradoResistencia).toBe("function");
  });

  it("returns todos los pokemones filtrados por su resistencia [bug, rock, dark]", () => {
    const resistant = "bug , rock , dark";
    const resistenciaPokemon = filtradoResistencia(resistant);
    const resultadoEsperado = resistenciaPokemon.filter((pokemon) =>
      pokemon.resistant.includes(resistant)
    );
    expect(resistenciaPokemon).toEqual(resultadoEsperado);
  });
});

//calcular fuerza
/*describe("calcularFuerza filtrar el top10 y last10 de todos los pokemones calculando su fuerza", () => {
  it("is a function", () => {
    expect(typeof calcularFuerza).toBe("function");
  });

  it("returns debe calcular la fuerza correctamente de los pokemones del top y last", () => {
    expect(calcularFuerza).toBe();
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
