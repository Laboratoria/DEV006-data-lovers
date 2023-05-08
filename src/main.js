/* eslint-disable no-console */
//main.js, importa las funciones exportadas de data.js y las usa para realizar la manipulación de dato
import data from "./data/pokemon/pokemon.js";
import {
  searchPokByName,
  searchPokByNumber,
  filtradoTipo,
  filtradoDebilidad,
  filtradoResistencia,
  ordenadoAz,
  invertirYOrdenarPorNombreZa,
  ordenarPorNumeroAscendente,
  ordenarPorNumeroDescendente,
  strongest,
  weaknest,
} from "./data.js";

//crear const para el contenedor de los pokemones (fondo degradado)
const containerPokemons = document.getElementById("pokemones");
//crear la pimera card
const templateCard = (datapokemon) => {
  containerPokemons.innerHTML = "";
  datapokemon.forEach((pokemon) => {
    const containerCard = document.createElement("div");
    containerCard.classList.add("contenedor-card1");
    containerCard.setAttribute("id", "contenedor-card1");
    containerCard.innerHTML += `<div class="card1" id="card1">
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
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.trim();
  let results;
  if (isNaN(searchValue)) {
    results = searchPokByName(data, searchValue);
    templateCard(results);
  } else {
    results = searchPokByNumber(data, searchValue);
    templateCard(results);
  }
  if (results.length === 0) {
    modalNotFound.style.display = "flex";
    containerPokemons.style.display = "none";
  } else {
    modalNotFound.style.display = "none";
    containerPokemons.style.display = "grid";
  }
});

//para el primer modal
const modalNotFound = document.getElementById("msjVal");

//creando el modal de la segunda cara
const modalCard2 = document.getElementById("mi-modal");
modalCard2.addEventListener("click", () => {
  let result;
  console.log(result, "prueba");

  modalContent.style.display = "flex";
});

const modalContent = (pokemon) => {
  return `
    <div class="card2" id="card2">
    <h2 class="pokemon-name">${pokemon.name}</h2>
    <div class="pokemon-img-container" id="pokemon-img-container">
    </div>
    <p class="pokemon-num">${pokemon.num}</p>
    <p class="size" id="size">${pokemon.size}</p>
    <p class="height" id="height">${pokemon.height}</p>
    <p class="generation" id="generation">${pokemon.generation}</p>
    <p class="type" id="type">${pokemon.type}</p>
    <p class="weakness" id="weakness">${pokemon.weakness}</p>
    <p class="resistant" id="resistant">${pokemon.resistant}</p>
    <p class="defense" id="defense">${pokemon.defense}</p>
    <p class="special-attack" id="specialattack">${pokemon.specialattack}</p>
    <p class="pokemon-stats" id="pokemon-stats">${pokemon.stats}</p>
    <p class="evolution" id="evolution">${pokemon.evolution}</p>
    <p class="egg" id="egg">${pokemon.egg}</p>
  </div>
  `;
};

// Agrega un controlador de eventos de clic al botón de imagen del Pokémon
const pokemonImgButtons = document.querySelectorAll(".pokemon-img");
pokemonImgButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("desde boton");
    modalCard2.innerHTML= modalContent;
  });

  // Obtiene la información del Pokémon a partir de su elemento contenedor
  /*const pokemonName = button.closest(".modal").querySelector(".pokemon-name").textContent;
    const pokemonImg = button.src;
    const pokemonNum = button.closest(".modal").querySelector(".pokemon-num").textContent;
    const pokemonDescription = "Aquí iría la descripción del Pokémon.";*/

  /* Genera el contenido del modal
const modalContent = generateModalContent({
  name: pokemonName,
  img: pokemonImg,
  num: pokemonNum,
  description: pokemonDescription,
});



// Crea un elemento HTML para el modal y establece su contenido
const modalElement = document.createElement("div");
modalElement.innerHTML = modalContent;

// Agrega el elemento HTML del modal al documento
document.body.appendChild(modalElement);

// Agrega estilos CSS para el modal
modalElement.style.position = "fixed";
modalElement.style.top = "50%";
modalElement.style.left = "50%";
modalElement.style.transform = "translate(-50%, -50%)";
modalElement.style.backgroundColor = "white";
modalElement.style.padding = "20px";
modalElement.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
modalElement.style.zIndex = "999";*/
});

//para ordenar A-Z FINAL
const orderAz = document.getElementById("az");
orderAz.addEventListener("click", () => {
  //ordenar la copia por nombre de la A hasta la Z
  const ordenado = ordenadoAz(data);
  templateCard(ordenado);
});

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
  const filtrado = filtradoTipo(data, selectType.value);
  templateCard(filtrado);
});

//filtrar por debilidad
const selectWeaknesses = document.getElementById("element-weaknesses-filter");
selectWeaknesses.addEventListener("change", () => {
  const filtradoD = filtradoDebilidad(data, selectWeaknesses.value);
  templateCard(filtradoD);
});

//filtrar por fortaleza
const selectResistant = document.getElementById("element-resistant-filter");
selectResistant.addEventListener("change", () => {
  const filtradoR = filtradoResistencia(data, selectResistant.value);
  templateCard(filtradoR);
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
const select = document.getElementById("element-strong-filter");
select.addEventListener("change", () => {
  const option = select.value;
  let pokemonsOrdenados;
  if (option === "strongest") {
    pokemonsOrdenados = strongest(data);
  } else if (option === "weaknest") {
    pokemonsOrdenados = weaknest(data);
  } else {
    pokemonsOrdenados = data.pokemon;
  }
  templateCard(pokemonsOrdenados);
});

//reproductor
const reproductor = document.getElementById("reproductor");
reproductor.volume = 0.03;


//barra de menu desplegable cel y tablet
const menu = document.getElementById("menu");
menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  const barraMenu = document.getElementById("barra");
  barraMenu.classList.toggle("active");
}


//barra filtrar desplegable
const filterToggle = document.getElementById('filter-toggle');
const filterNav = document.getElementById('box-filter-hidden');

filterToggle.addEventListener('click', () => {
  filterNav.classList.toggle('hidden');
});
