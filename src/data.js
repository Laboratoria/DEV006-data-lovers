

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

export const filterFilms = (films, selectedProducer, selectedDirector) => {
  if (selectedDirector === "all" && selectedProducer === "all") {
    return films;
  } else {
    return films.filter(film => {
      const producerMatch = selectedProducer === "all" || film.producer === selectedProducer;
      const directorMatch = selectedDirector === "all" || film.director === selectedDirector;
      return producerMatch && directorMatch;
    });
  }
}


export const sortAsc = (films) => {

  films.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
 
  return films
}

export const sortDes = (films) => {

  films.sort((a, b) => {
    if (a.title > b.title) return -1;
    if (a.title < b.title) return 1;
    return 0;
  });
 
  return films
}