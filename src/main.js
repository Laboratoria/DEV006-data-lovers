import { example } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/harrypotter/data.js";

export default {
  characters: [
    {
      id: 1,
      name: "Euan Abercrombie",
      birth: "between 1 September 1983 and 31 August 1984",
      death: null,
      species: "Human",
      ancestry: null,
      gender: "Male",
      hair_color: null,
      eye_color: null,
      wand: null,
      patronus: null,
      house: "Gryffindor",
      associated_groups: [
        "Hogwarts School of Witchcraft and Wizardry",
        "Gryffindor",
      ],
      books_featured_in: [5],
    },
    {
      id: 2,
      name: "Stewart Ackerley",
      birth: "between 1 September 1982and 31 August 1983",
      death: null,
      species: "Human",
      ancestry: null,
      gender: "Male",
      hair_color: null,
      eye_color: null,
      wand: null,
      patronus: null,
      house: "Ravenclaw",
      associated_groups: [],
      books_featured_in: [4],
    },
  ],
};
console.log(example, data);
