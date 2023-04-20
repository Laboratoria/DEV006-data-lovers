import { HP, filterCharacters, sortingCharactersAZ} from "../src/data.js";

const PersonTest = {
  characters: [
    {
      id: 1,
      name: "Euan Abercrombie",
      species: "Human",
      house: "Gryffindor",
    },
    {
      id: 1,
      name: "Euan Abercrombie",
      species: "Muggles",
      house: "Gryffindor",
    },
    {
      id: 1,
      name: "Tamara",
      species: "Wizard",
      house: "Gryffindor",
    },
  ],
};

const PersonTestSort = {
  characters: [
    {
      id: 1,
      name: "Zara",
      species: "Human",
      house: "Gryffindor",
    },
    {
      id: 1,
      name: "Euan Abercrombie",
      species: "Muggles",
      house: "Gryffindor",
    },
    {
      id: 1,
      name: "Tamara",
      species: "Wizard",
      house: "Gryffindor",
    },
  ],
};

const PersonTestSorted = {
  characters: [
    {
      id: 1,
      name: "Euan Abercrombie",
      species: "Muggles",
      house: "Gryffindor",
    },
    {
      id: 1,
      name: "Tamara",
      species: "Wizard",
      house: "Gryffindor",
    },
    {
      id: 1,
      name: "Zara",
      species: "Human",
      house: "Gryffindor",
    },
  ],
};

/*Test función HP()*/
describe("HP", () => {
  it("que sea una función", () => {
    expect(typeof HP).toBe("function");
  });
  it("que me retorne la data", () => {
    expect(HP(PersonTest)).toEqual([
      {
        id: 1,
        name: "Euan Abercrombie",
        species: "Human",
        house: "Gryffindor",
      },
      {
        id: 1,
        name: "Euan Abercrombie",
        species: "Muggles",
        house: "Gryffindor",
      },
      {
        id: 1,
        name: "Tamara",
        species: "Wizard",
        house: "Gryffindor",
      },
    ]);
  });
});

/*Test del filtrado*/
describe("filterCharacters", () => {
  it("es una función", () => {
    expect(typeof filterCharacters).toBe("function");
  });

  it("filtrado por especie", () => {
    expect(filterCharacters(PersonTest.characters, "Human")).toEqual([
      {
        id: 1,
        name: "Euan Abercrombie",
        species: "Human",
        house: "Gryffindor",
      },
    ]);
  });
});

describe("sortCharactersAZ", () => {
  it("ordenar de A a Z", () => {
    expect(sortingCharactersAZ(PersonTestSort.characters)).toEqual(PersonTestSorted.characters)
  })
})
/*it("se espera que tenga en sus propiedades,Gryffindor", () => {
    expect(HP(PersonTest)).toMatch(/Gryffindor/);
  });*/

/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });
  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
