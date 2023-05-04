/* eslint-disable no-console */
//main.js, importa las funciones exportadas de data.js y las usa para realizar la manipulación de dato
import data from "./data/pokemon/pokemon.js";
import {searchPokByName, searchPokByNumber, filtradoTipo, filtradoDebilidad, filtradoResistencia, ordenadoAz, invertirYOrdenarPorNombreZa, ordenarPorNumeroAscendente, ordenarPorNumeroDescendente, strongest, weaknest} from "./data.js";

//crear const para el contenedor de los pokemones (fondo degradado)
const containerPokemons = document.getElementById("pokemones")
//crear las card
const templateCard = datapokemon => {
  containerPokemons.innerHTML = "";
  datapokemon.forEach(pokemon => {
    const containerCard = document.createElement("div");
    containerCard.classList.add("contenedor-card1");
    containerCard.setAttribute("id", "contenedor-card1");
    containerCard.innerHTML +=
    `<div class="card1" id="card1">
      <h2 class="pokemon-name">${pokemon.name}</h2>
      <div class="pokemon-img-container" id="pokemon-img-container">
        <button><img class="pokemon-img" src="${pokemon.img}" alt="${pokemon.name}"></button>
      </div>
      <p class="pokemon-num">${pokemon.num}</p>
    </div>`;
    containerPokemons.appendChild(containerCard);
  });
};

//llamamos a la funcion template card para que se muestre la data (las cards en pantalla)
templateCard(data.pokemon);

//llamando al boton para que cuando escribas salgan coincidencias solo en caso de letras
//y en caso de numero solo encuentra el que se recibe en el input
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.trim();
  let results;
  if (isNaN(searchValue)) {
    results = searchPokByName(data,searchValue);
    templateCard(results);
  } else {
    results = searchPokByNumber(data,searchValue);
    templateCard(results);
  }
  if(results.length===0){
    modal.style.display = "flex";
    containerPokemons.style.display = "none";
  } else{
    modal.style.display = "none";
    containerPokemons.style.display = "grid";
  }
});

//para el modal
const modal = document.getElementById('msjVal');


//para ordenar A-Z FINAL
const orderAz = document.getElementById('az');
orderAz.addEventListener('click', () => {
  //ordenar la copia por nombre de la A hasta la Z
  const ordenado = ordenadoAz(data);
  templateCard(ordenado);
})


//ordenar de la Z-A FINAL
const invertirZa = document.getElementById("za");
invertirZa.addEventListener("click", () => {
  const datosInvertidos = invertirYOrdenarPorNombreZa(data);
  // Manipulación del DOM para mostrar los datos invertidos y ordenados
  templateCard(datosInvertidos);
});


//para que al hacer click haga un scroll a la seccion filtrando
const toFilterLink = document.getElementById("to-filter-link");
toFilterLink.addEventListener("click", (event) => {
  event.preventDefault();
  const filtrandoSection = document.getElementById("filtrando-section");
  filtrandoSection.scrollIntoView({ behavior: "smooth" });
});


//filtrar por tipo
const selectType = document.getElementById("element-type-filter");
selectType.addEventListener("change", () => {
  const filtrado = filtradoTipo(data,selectType.value);
  templateCard(filtrado);
});


//filtrar por debilidad
const selectWeaknesses = document.getElementById("element-weaknesses-filter");
selectWeaknesses.addEventListener("change", () => {
  const filtradoD = filtradoDebilidad(data,selectWeaknesses.value);
  templateCard(filtradoD);
});


//filtrar por fortaleza
const selectResistant = document.getElementById('element-resistant-filter');
selectResistant.addEventListener("change", () => {
  const filtradoR = filtradoResistencia(data,selectResistant.value);
  templateCard(filtradoR)
});


//ordenar ascendentemente
const menorAmayor = document.getElementById("ascendente");
menorAmayor.addEventListener("click", () => {
  const datosOrdenados = ordenarPorNumeroAscendente(data);
  // Manipulación del DOM para mostrar los datos ordenados por número ascendente
  templateCard(datosOrdenados);
});


//ordenar descendentemente
const mayorAmenor = document.getElementById("descendente");
mayorAmenor.addEventListener("click", () => {
  const datosOrdenados = ordenarPorNumeroDescendente(data);
  // Manipulación del DOM para mostrar los datos ordenados por número descendente
  templateCard(datosOrdenados);
});


/*calcular fuerza*/
const select = document.getElementById('element-strong-filter');
select.addEventListener('change', () => {
  const option = select.value;
  let pokemonsOrdenados;
  if (option === 'strongest') {
    pokemonsOrdenados = strongest(data);
  } else if (option === 'weaknest') {
    pokemonsOrdenados = weaknest(data);
  } else {
    pokemonsOrdenados = data.pokemon;
  }
  templateCard(pokemonsOrdenados);
});

//reproductor
const reproductor = document.getElementById('reproductor');
reproductor.volume = 0.03;
