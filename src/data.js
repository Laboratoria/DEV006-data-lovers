

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

export const filterCharacter = (characters, selectedSpecies,selectedAnimations) => {
  let count = 0;

  characters.forEach((character) => {
    const specie = character.querySelector("h3:nth-child(7)").textContent.split(": ")[1];
    const animation = character.querySelector("h3:nth-child(1)").textContent.split(": ")[1];
    if ((selectedSpecies === "All" || specie === selectedSpecies) && (selectedAnimations === "All" || animation === selectedAnimations) ){
      character.style.display = "inline-block";
      count++;
    } else {
      character.style.display = "none";
    }
  });

  const counter = document.querySelector(".counter");
  counter.textContent = `${count} characters found`;
}

export const filterOrden = (films,container,order) => {
  container.innerHTML= "";
  films.sort((a, b) => {
    const nameA = a.querySelector("h3:nth-child(2)").textContent.split(": ")[1];
    const nameB = b.querySelector("h3:nth-child(2)").textContent.split(": ")[1];
    if(nameA > nameB && order === 1){
      return 1;
    }
    else if(nameA < nameB && order === -1){
      return 1;
    }
    return 0;
  })
  films.forEach(function (ch) {
    container.appendChild(ch);
  });
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
