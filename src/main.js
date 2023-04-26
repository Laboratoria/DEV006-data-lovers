/* eslint-disable no-console */

import { sortBy, filtrar } from './data.js';


//ORGANIZACION A-Z y Z-A



document.addEventListener('DOMContentLoaded', () => {
  const selectSort = document.querySelector('.sort');
  selectSort.addEventListener('change', () => {
    const sortOrder = selectSort.value === '1' ? 'asc' : 'desc';
    sortBy(sortOrder);
  });
});


//FILTRADO BUSQUEDA



// eslint-disable-next-line no-undef
botonBuscar.addEventListener("click", () => {
  // eslint-disable-next-line no-undef
  resultados.innerHTML = '';
  filtrar()
});

// eslint-disable-next-line no-undef
botonLimpiar.addEventListener("click", function () {
  location.reload();
});

document.addEventListener('DOMContentLoaded', () => {
  const btMenu = document.querySelector('.bt-menu');
  const ul = document.querySelector('.contenido');

  btMenu.addEventListener('click', () => {
    ul.classList.toggle('contenido');
    console.log('Hace click')
  });
});





