// estas funciones son de ejemplo
import data from './data/ghibli/ghibli.js';

//const movieTitles = data.films;
//console.log(movieTitles);
//console.log(data.films[0].locations[0].name);

//console.log(data.films)

//export const result = data.films[18].title;
//console.log(result);

//return "result"; 
const dataFilms = data.films;
export const movieTitles = dataFilms.filter(movie => movie.title).map(movie => movie.title);
console.log(Object.values(movieTitles));

export const movieLocations = dataFilms.filter(movie => movie.locations).map(movie => movie.locations).map(locations => locations.name);
console.log(Object.values(data.films));



export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//console.log("films", data.films[1]);
