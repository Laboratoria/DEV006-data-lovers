import { HP, filterCharacters, sortingCharactersAZ, sortingCharactersZA } from "../src/data.js";

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

const PersonTestSortedAZ = {
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

const PersonTestSortedZA = {
  characters: [
    {
      id: 1,
      name: "Zara",
      species: "Human",
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
      name: "Euan Abercrombie",
      species: "Muggles",
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

/*Test sort AZ*/
describe("sortCharactersAZ", () => {
  it("es una función", () => {
    expect(typeof sortingCharactersAZ).toBe("function");
  });
  it("ordenar de A a Z", () => {
    expect(sortingCharactersAZ(PersonTestSort.characters)).toEqual(PersonTestSortedAZ.characters)
  })
})

/*Test sort ZA*/
describe("sortCharactersZA", () => {
  it("es una función", () => {
    expect(typeof sortingCharactersZA).toBe("function");
  });
  it("ordenar de Z a A", () => {
    expect(sortingCharactersZA(PersonTestSort.characters)).toEqual(PersonTestSortedZA.characters)
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
