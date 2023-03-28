// estas funciones son de ejemplo
import data from './data/ghibli/ghibli.js';

const movieTitles = data.films;

export const result = movieTitles.filter(title => title === title);

//return "result"; 

//console.log(result);

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//console.log("films", data.films[1]);
