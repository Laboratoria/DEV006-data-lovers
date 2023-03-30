

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

export const filterFilms = (films, selectedProducer) => {
  if (selectedProducer === "all") {
    return films;
  } else {
    return films.filter(film => film.producer.toLowerCase().replace(" ", "-") === selectedProducer);
  }
}
