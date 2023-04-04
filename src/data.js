
export const dataFilter = (directores, data) => {
//filtro
  const directores1 = data.films.filter(films => films.director === directores)
  return directores1;
};

export const sortData = () => {
  return 'OMG';
};

export const stats = () => {
  return 'OMGg';
};

