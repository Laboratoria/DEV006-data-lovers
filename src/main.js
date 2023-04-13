import data from './data/lol/lol.js';
  


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


//const champion = Object.keys(data.data)

//funcion de buscado

const buscar = document.querySelector('#buscar');
const botonBuscar = document.querySelector('#botonBuscar');
const botonLimpiar = document.querySelector('#botonLimpiar')
const resultados = document.querySelector('#resultados')
const notFound = "Champion not found"

const filtrar = ()=>{
//console.log(buscar.value);
  resultados.innerHTML = '';

  const texto = buscar.value.toLowerCase();

  for (const key in data.data){
    const card = data.data[key];
    const name = card.name.toLowerCase();
    
    if(name.indexOf(texto) !== -1){`
      <li>${resultados.appendChild(card.championCard)}</li>
      `
    }else {
      card.championCard.style.display = "none"
    }
  }
  if(resultados.innerHTML === ''){
    resultados.innerHTML += `
      <h3>${notFound}</h3>
    `
  
    // eslint-disable-next-line no-undef
    card.championCard.style.display = "none"
  }
}

botonBuscar.addEventListener("click", filtrar)
botonLimpiar.addEventListener("click",function() {
  buscar.value = "";
  location.reload();
  
});

 







