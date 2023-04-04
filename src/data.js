
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


export const sortData = (ordenAs,data) => {
  let orden = "";
  if (ordenAs === "ascendente"){
    orden = data.films.sort((x, y) => x.rt_score - y.rt_score)
  } 
  else {orden = data.films.sort((x, y) => x.rt_score - y.rt_score).reverse((x, y) => x.rt_score - y.rt_score)
  } 

  return orden;

};

export const stats = () => {
  return 'OMGg';
};

