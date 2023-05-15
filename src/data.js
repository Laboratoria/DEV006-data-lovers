//Función Calculo Agregregado
export const genderPorcentage = (genero, array) => {
  const personajesPorGenero = array.filter(personaje => personaje.gender === genero);

  return ((personajesPorGenero.length * 100) / array.length).toFixed(1);
}
