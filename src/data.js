// estas funciones son de ejemplo



export const totalMovie = (movie) => {

  const counter1= movie.length

  return counter1;
};

export const countCharacters = (films) => {
  
  let characterCount = 0;
  films.forEach((film) => {
    characterCount += film.people.length;
  });
  return characterCount;
  
};

export const countCharactersforPeople = (films) => {
  
  const characterCountP = films.people.length;
  return characterCountP;
  
};

/* export const totalPeople = (movie) => {

  const element = movie.map((movie) => movie.people);
  console.log(element); */
/*   let counter2 = movie.filter(counterTitle => counterTitle === element); */
/*     return element.length; */
/*   }; */

/* array = array.filter(value => value == element);
var array = [1, 2, 3, 5, 2, 5, 9, 8, 3, 5, 2, 5].reduce((count, value) =>
 (value == 5 ? count + 1 : count), 0) */
/*   const result = films.filter(title => title == "title");
console.log(result);
  const element = films.map((movie) => movie.title.map(character => character.title));
  let counter1 = films.filter(counterTitle => counterTitle === element);
  console.log(counter1); */
