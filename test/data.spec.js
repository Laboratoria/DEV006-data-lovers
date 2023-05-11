import { filterImages } from "../src/mainPersonajes";

filterImages

const mockData= {[
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
  },
  {
    "id": 267,
    "name": "Draco Malfoy",
    "birth": "5 June, 1980",
    "death": null,
    "species": "Human",
    "ancestry": "Pure-blood",
    "gender": "Male",
    "hair_color": "Silver-blonde",
    "eye_color": "Grey",
    "wand": "10\", Hawthorn, unicorn hair (formerly)",
    "patronus": "None",
    "house": "Slytherin",
    "associated_groups": [],
    "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
  },
  {
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
  {
    "id": 269,
    "name": "Scorpius Malfoy",
    "birth": "between 1 September 2005 and 31 August 2006",
    "death": null,
    "species": "Human",
    "ancestry": "Pure-blood",
    "gender": "Male",
    "hair_color": "White-blond",
    "eye_color": "Grey",
    "wand": "Unknown length, wood and core",
    "patronus": null,
    "house": "Malfoy family",
    "associated_groups": [],
    "books_featured_in": [7]
  },
  {
    "id": 270,
    "name": "Marauders",
    "birth": null,
    "death": null,
    "species": null,
    "ancestry": null,
    "gender": null,
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": null,
    "associated_groups": [],
    "books_featured_in": [3, 4, 5, 6, 7]
  },
]}

describe('Si la función puede filtrar por casas', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

