import data from './data/harrypotter/data.js';
const personajes= data.characters;
console.log(personajes);


// Filtrar casas con el botón Selecciona tu casa
//document.getElementById("desplegable").addEventListener("click", filtroCasas);

// Función para llamar a la data y filtrar
const filterButton = document.getElementById('filter-button');
const housesList = document.getElementById('houses-list');

filterButton.addEventListener('click', () => {
  // Crear una nueva array con las casas únicas de la array characters
  const houses = [...new Set(personajes.map(personajes => personajes.house))];
  // Filtrar las casas que te interesan
  const filteredHouses = houses.filter(house => ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'].includes(house));

  // Crear una lista de elementos <li> para cada casa
  const houseItems = filteredHouses.map(house => {
    const item = document.createElement('li');
    item.textContent = house;
    return item;
  });

  // Mostrar la lista de elementos desplegables en el elemento <ul>
  housesList.innerHTML = '';
  houseItems.forEach(item => {
    housesList.appendChild(item);
  });
});
// menu desplegable botón SORT
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

dropdownMenu.addEventListener('click', (event) => {
  const button = event.target;
  const order = button.getAttribute('data-order');
  sortByName(order);
  dropdownMenu.classList.remove('show');
});


// Plantilla para la página
/*const pageTemplate = `
  <div class="menuContainer">  
    <select id="menuCasas">
      <option value="">CASAS</option>
      <option value="casaGryffindor">Gryffindor</option>
      <option value="casaSlytherin">Slytherin</option>
      <option value="casaRavenclaw">Ravenclaw</option>
      <option value="casaHufflepuff">Hufflepuff</option>
    </select>
  </div>
  <div class="page">
    <h1>Bienvenido a mi página</h1>
    <div class="content">
      <p>Este es el contenido de mi página</p>
    </div>
  </div>
`;
function buildPage() {
    // Crear los elementos HTML necesarios
    const menuContainer =document.createElement('div')
    const page = document.createElement('div');
    const menuCasas = document.createElement('select');
    const content = document.createElement('div');
    
    // Agregar los elementos HTML al documento
    page.appendChild(content);
    document.body.appendChild(page);
    content.prepend(menuCasas);
    
    
  
    // Agregar el contenido a la página
    content.innerHTML = pageTemplate;
  
    // Agregar un evento al botón de menú desplegable revisar si es necesario
    }
  console.log(buildPage)
  buildPage()*/
  
