import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

// Plantilla para la página
const pageTemplate = `
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
  buildPage()