import data from './data/harrypotter/data.js';
const personajes = data.characters;
// Funciones para la galería
export function filterImages(data, house) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
  //console.log(filterImages);

  const filterPersonajes = personajes.filter(personajes => personajes.house === house || house === 'all')
  filterPersonajes.forEach(personajes => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image');

    const image = document.createElement('img');
    
    
    image.src = personajes.foto || './images/default.jpg';
    image.alt = personajes.name;
   
    const name = document.createElement('h3');
    name.textContent = personajes.name;

    const house = document.createElement('p');
    house.textContent = personajes.house;

    imageContainer.appendChild(image);
    imageContainer.appendChild(name);
    imageContainer.appendChild(house);

    gallery.appendChild(imageContainer);

  });
  //console.log(filterPersonajes);
  return filterPersonajes;
}

const filterButtons = document.querySelectorAll('.filter button');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const house = button.getAttribute('data-house');
    filterImages(personajes, house);
  });
});

// filtro A la Z
export function sortByName(order) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';

  personajes.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return order === 'asc' ? -1 : 1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return order === 'asc' ? 1 : -1;
    return 0;
  }).forEach(personajes => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image');

    // const image = document.createElement('img');
    // image.src = `images/${personajes.id}.jpg`;
    // image.alt = personajes.name;

    const name = document.createElement('h3');
    name.textContent = personajes.name;

    const house = document.createElement('p');
    house.textContent = personajes.house;

    // imageContainer.appendChild(image);
    imageContainer.appendChild(name);
    imageContainer.appendChild(house);

    gallery.appendChild(imageContainer);
  });
}

const sortButtons = document.querySelectorAll('.sort button');

sortButtons.forEach(button => {
  button.addEventListener('click', () => {
    const order = button.getAttribute('data-order');
    sortByName(order);
    sortButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
sortByName('asc');
filterImages('all');
//console.log(filterImages);


