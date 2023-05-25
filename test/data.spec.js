import {genderPorcentage} from "../src/data";


const mockData = [
  {
    "id": 266,
    "name": "Abraxas Malfoy",
    "birth": "before 1936 (most likely), Great Britain or Ireland",
    "death": "Pre 2 September, 1996",
    "species": "Human",
    "ancestry": "Pure-blood",
    "gender": "Male",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": "Slytherin",
    "associated_groups": ["Malfoy family", "Hogwarts School of Witchcraft and Wizardry", "Slytherin"],
    "books_featured_in": [6]
  }
  , {
    "id": 268,
    "name": "Lucius Malfoy",
    "birth": "between 9 September 1953 and 8 September 1954",
    "death": null,
    "species": "Human",
    "ancestry": "Pure-blood",
    "gender": "Male",
    "hair_color": "White-blond",
    "eye_color": "Grey",
    "wand": "Elm and dragon heartstring (formerly)",
    "patronus": "None",
    "house": "Malfoy family",
    "associated_groups": [],
    "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
  },
];

describe('get genderPorcentage', () => {
  
  it('Debería ser una función', () => {
    expect(typeof genderPorcentage).toBe("function");

  });
  it('Debería entregar el resultado de hombre de la función', () => {
    expect(genderPorcentage('Male',mockData)).toBe("100.0");
  });
  // test('Debería renderizar todas las imagenes cuando el parámetro house es "all"', () => {
  //   const house = 'all';
  //   const filteredData = filterImages(mockData, house);


  //   expect(filteredData.length).toBe(mockData.length);
  // });
});
