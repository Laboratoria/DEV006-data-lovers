/* eslint-disable no-console */
//main.js, importa las funciones exportadas de data.js y las usa para realizar la manipulación de dato
import data from "./data/pokemon/pokemon.js";
import {searchPokByName, searchPokByNumber, filtradoTipo, filtradoDebilidad, filtradoResistencia, ordenadoAz, invertirYOrdenarPorNombreZa, ordenarPorNumeroAscendente, ordenarPorNumeroDescendente, strongest, weaknest} from "./data.js";

const containerPokemons = document.getElementById("pokemones")

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

templateCard(data.pokemon);


const searchInput = document.getElementById('search');

searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.trim();
  if (isNaN(searchValue)) {
    const results = searchPokByName(data,searchValue);
    templateCard(results);
  } else {
    const results = searchPokByNumber(data,searchValue);
    templateCard(results);
  }
});

const formulario = document.getElementById('searcher');
const modal = document.getElementById('msjVal');
const btnCerrar = document.getElementById('cerrar');

formulario.addEventListener('input', (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  if(searchTerm==="") {
    return;
  }
  modal.style.display = "block";
});

btnCerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

/*const actualizarResultados = (searchQuery) => {
  const searchResult = searchPokByName(searchQuery);
  containerPokemons.innerHTML = "";
  templateCard(searchResult);
};*/


/*ventana del modal para cerrar
const cerrar = document.getElementById('cerrar');
//para cerrar la ventana emergente
cerrar.addEventListener('click', () =>  {
  const msj = document.getElementById('msj');
  msj.classList.remove('show');
  console.log(msj)
});*/

/*buscar por nonbre ANTIGUO sin MODAL FINAL
const btnBuscarByName = document.getElementById('search');
btnBuscarByName.addEventListener('input', (e) =>{
  actualizarResultados(e.target.value)
})*/


/*buscar por numero FINAL
const buscarByNumber = document.getElementById("search");
buscarByNumber.addEventListener("input", (e)=> {
  const searchNumResult = searchPokByNumber(e.target.value);
  containerPokemons.innerHTML = "";
  templateCard(searchNumResult);
})*/


//ventana del modal para cerrar
const cerrarN = document.getElementById('cerrar');
//para cerrar la ventana emergente
cerrarN.addEventListener('click', () =>  {
  const msj = document.getElementById('msj');
  msj.classList.remove('show');
  templateCard(msj)
});


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


//para que al hacer click se baje a la seccion filtrando
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
