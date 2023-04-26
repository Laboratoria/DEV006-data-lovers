/* eslint-disable no-console */
import data from './data/lol/lol.js';


//VISUALIZADOR

const contenedor = document.querySelector('.contenedor');

const champion = Object.keys(data.data)




for (let i = 0; i < champion.length; i++) {
  const key = champion[i]
  const card = data.data[key];


  const name = card.name;
  const img = card.img;
  const blurb = card.blurb;
  const title = card.title;
  const infoObject = card.info;

  const championCard = document.createElement("div");
  championCard.classList.add("champion-card");



  for (const subKey in infoObject) {
    // eslint-disable-next-line no-prototype-builtins
    if (infoObject.hasOwnProperty(subKey)) {
      const subValue = infoObject[subKey];
      const statElement = document.createElement("h5");
      statElement.innerHTML = `${subKey}: ${subValue}`;
      championCard.appendChild(statElement);
      statElement.classList.add("info")
    }



  }

  const championImgContainer = document.createElement("div");
  championImgContainer.classList.add("champion-img-container");

  const championImg = document.createElement("img");
  championImg.src = img;
  //championImg.setAttribute("src",img)
  championImg.alt = name;
  championImg.classList.add("champion-img");

  // creación h2 para ingresar nombre
  const championName = document.createElement("h2");
  // toma el primer caracter del nombre para que sea en mayuscula y juntarlo con slice para devolver el resto de caracteres.
  championName.textContent = name.charAt(0).toUpperCase() + name.slice(1);
  championName.classList.add("champion-name");

  const championBlurb = document.createElement("p");
  championBlurb.textContent = blurb.charAt(0).toUpperCase() + blurb.slice(1);
  championBlurb.textContent = blurb.replace('<br><br>', '   ')
  championBlurb.classList.add("blurb");


  const championTitle = document.createElement("h4");
  championTitle.textContent = title.charAt(0).toUpperCase() + title.slice(1);
  championTitle.classList.add("title")






  championImgContainer.appendChild(championImg);
  championCard.appendChild(championName);
  championCard.appendChild(championImgContainer);
  contenedor.appendChild(championCard);
  championCard.appendChild(championTitle)
  championCard.appendChild(championBlurb);


  card.championCard = championCard;

  card.championCard.style.display = 'block';


}

//ORGANIZADOR


const allChampions = Object.keys(data.data);
let currentChampions = allChampions

const sortBy = (sortOrder) => {
  currentChampions.sort((a, b) => sortOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a));
  contenedor.innerHTML = '';
  currentChampions.forEach(key => {
    const champion = data.data[key];
    const championCard = champion.championCard;
    championCard.style.display = 'block';
    contenedor.appendChild(championCard);
  });
  console.log(champion)
};


//BUSQUEDA

const buscar = document.querySelector('#buscar');
//const botonBuscar = document.querySelector('#botonBuscar');
//const botonLimpiar = document.querySelector('#botonLimpiar')
const resultados = document.querySelector('#resultados')
const notFound = "Champion not found"

const filtrar = () => {
  currentChampions = [];
  resultados.innerHTML = '';

  const texto = buscar.value.toLowerCase();

  for (const key in data.data) {
    const card = data.data[key];
    const name = card.name.toLowerCase();

    if (name.includes(texto)) {
      resultados.appendChild(card.championCard);
      card.championCard.style.display = 'block';
      currentChampions.push(card.id)
    } else {
      card.championCard.style.display = 'none';
    }

  }

  if (resultados.innerHTML === '') {
    resultados.innerHTML += `
      <h3>${notFound}</h3>
    `
    // eslint-disable-next-line no-undef
  }
  //buscar.value = "";
}



export { sortBy, filtrar };
