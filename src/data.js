
export const filterDirector = (directores, data) => {
  //filtro

  const directores1 = data.films.filter(films => films.director === directores)
  return directores1;
};

export const filterProducer = (productores, data) => {
  const productores1 = data.films.filter(films => films.producer === productores)
  return productores1;
};


export const sortDataYear = (ordenAs, data) => {
  let orden = "";
  if (ordenAs === "oldest") {
    orden = data.films.sort((x, y) => x.release_date - y.release_date)
  }
  else {
    orden = data.films.sort((x, y) => x.release_date - y.release_date).reverse((x, y) => x.release_date - y.release_date)
  }

  return orden;

};


export const filterSpecies = (especie, data) => {


  if (especie !== "Else") {
    return data.films.flatMap(film => film.people)
      .filter(element => element.specie === especie)
  }
  return data.films.flatMap(film => film.people)
    .filter(element => ["Wolf", "Red elk", "Deity", "Bird", "unknown", "Spirit of The White Fox", "Dragon", "Wizard", "Demon", "Human/Scarecrow", "Dog", "Arch-mage/Human", "Fish/Human"].includes(element.specie))
};

export const characterMovie = (characterMovies, data) => {

  return data.films.filter(films => films.title === characterMovies)
    .flatMap(element => element.people);

}

export const functionSortAZ = (sortAZ, data) => {

  const AZ = data.films.flatMap(element => element.people).sort(function (a, b) {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  })

  if (sortAZ === "AZ") {
    
    return AZ
  }

  else {
    const ZA = AZ.reverse((function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    }));

    return ZA
  }
}


export const genderTrivia = (data) => {
  const gender = data.films.flatMap (element => element.people).flatMap(element => element.gender);
  console.log(gender)
}