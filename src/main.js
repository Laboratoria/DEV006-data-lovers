

//ORGANIZACION A-Z y Z-A
import sortBy from './data.js';

const contenedor = document.getElementById('contenedor');

document.addEventListener('DOMContentLoaded', () => {
  const selectSort = document.querySelector('.sort');
  selectSort.addEventListener('change', () => {
    const sortOrder = selectSort.value === '1' ? 'asc' : 'desc';
    sortBy(sortOrder, contenedor);
  });
});


