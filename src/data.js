
export const filterDirector = (directores, data) => {
//filtro
  const directores1 = data.films.filter(films => films.director === directores)
  return directores1;
};

export const filterProducer = (productores,data) => {
  const productores1 = data.films.filter (films => films.producer === productores)
  return productores1;
};

export const filterSpecies = (especie,data) => {
  const specie1 = data.films.filter (films => films.specie === especie)
  return specie1;
};


export const sortData = () => {
  return 'OMG';
};

export const stats = () => {
  return 'OMGg';
};

