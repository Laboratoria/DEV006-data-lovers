// estas funciones son de ejemplo

export const countCharacters = (films) => {
  
  let characterCount = 0;
  films.forEach((film) => {
    characterCount += film.people.length;
  });
  return characterCount;
  
};

/* export const counter = (movies) => {
  return movies.filter(movie => true).length;
  
}; */

/* export function countMovies(films, conditionFn) {
  return films.filter(conditionFn).length;
}
 */


