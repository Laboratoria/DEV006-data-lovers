
import {sortBy,filtrado} from './data.js';


//ORGANIZACION A-Z y Z-A


let contenedor = document.getElementById('contenedor');

document.addEventListener('DOMContentLoaded', () => {
  const selectSort = document.querySelector('.sort');
  selectSort.addEventListener('change', () => {
    const sortOrder = selectSort.value === '1' ? 'asc' : 'desc';
    sortBy(sortOrder);
  });
});


//FILTRADO BUSQUEDA



botonBuscar.addEventListener("click", () => {
  resultados.innerHTML = '';
  filtrado()
});
 
botonLimpiar.addEventListener("click",function() {
  location.reload();
  

});

 







