
export const filterDirector = (directores, data) => {
  //filtro

  const directores1 = data.films.filter(films => films.director === directores)
  return directores1;
};

export const filterProducer = (productores, data) => {
  const productores1 = data.films.filter(films => films.producer === productores)
  return productores1;
};

export const filterSpecies = (especie, data) => {


  if (especie !== "Else") {
    return data.films.flatMap(film => film.people)
      .filter(element => element.specie === especie)
  }
  return data.films.flatMap(film => film.people)
    .filter(element => ["Wolf", "Red elk", "Deity", "Bird", "unknown", "Spirit of The White Fox", "Dragon", "Wizard", "Demon", "Human/Scarecrow", "Dog", "Arch-mage/Human", "Fish/Human"].includes(element.specie))
};


export const sortData = (ordenAs, data) => {
  let orden = "";
  if (ordenAs === "ascendente") {
    orden = data.films.sort((x, y) => x.rt_score - y.rt_score)
  }
  else {
    orden = data.films.sort((x, y) => x.rt_score - y.rt_score).reverse((x, y) => x.rt_score - y.rt_score)
  }

  return orden;

};

export const sortDataYear = (ordenAs, data) => {
  let orden = "";
  if (ordenAs === "ascendente") {
    orden = data.films.sort((x, y) => x.release_date - y.release_date)
  }
  else {
    orden = data.films.sort((x, y) => x.release_date - y.release_date).reverse((x, y) => x.release_date - y.release_date)
  }

  return orden;

};

export const stats = () => {
  return 'OMGg';
};

