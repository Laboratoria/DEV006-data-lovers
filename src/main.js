import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

// Plantilla para la página
const pageTemplate = `
  <div class="page">
    <nav class="navbar">
      <button class="navbar-toggler">
        <span class="navbar-toggler-icon">Menu</span>
      </button>
    </nav>
    <div class="content">
      <h1>Bienvenido a mi página</h1>
      <p>Este es el contenido de mi página</p>
    </div>
  </div>
`;
function buildPage() {
    // Crear los elementos HTML necesarios
    const page = document.createElement('div');
    const navbarToggler = document.createElement('button');
    const navbarNav = document.createElement('ul');
    const content = document.createElement('div');
    

    
    // Agregar las clases CSS a los elementos HTML
    // page.classList.add('page'); como agregar clases
    
  
    // Agregar los elementos HTML al documento
    /*navbar.appendChild(navbarToggler);
    navbarToggler.appendChild(navbarTogglerIcon);
    navbar.appendChild(navbarNav);*/
    //page.appendChild(navbar);
  

    page.appendChild(content);
    document.body.appendChild(page);
    
  
    // Agregar el contenido a la página
    content.innerHTML = pageTemplate;
  
    // Agregar un evento al botón de menú desplegable revisar si es necesario
    navbarToggler.addEventListener('click', () => {
      navbarNav.classList.toggle('show');
    });
    
  }
  console.log(buildPage)
  buildPage()