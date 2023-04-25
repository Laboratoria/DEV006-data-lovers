/* eslint-disable no-console */
//main.js, importa las funciones exportadas de data.js y las usa para realizar la manipulación de dato
import data from "./data/pokemon/pokemon.js";
import {searchPokByName, searchPokByNumber, filtradoTipo, filtradoDebilidad, filtradoResistencia, ordenarPorNombreAz, invertirYOrdenarPorNombreZa, ordenarPorNumeroAscendente, ordenarPorNumeroDescendente, calcularFuerza} from "./data.js";

//buscar por nombre
const btnBuscarByName = document.getElementById("search");
btnBuscarByName.addEventListener("input", (e) => {
  const searchingResult = searchPokByName(e.target.value);
  console.log(e.target.value);
  console.log(searchingResult);
});

//ventana del modal para cerrar
const cerrar = document.getElementById('cerrar');
//para cerrar la ventana emergente
cerrar.addEventListener('click', () =>  {
  const msj = document.getElementById('msj');
  msj.classList.remove('show');
  console.log(msj)
});


//buscar por numero
const buscarByNumber = document.getElementById("search");
buscarByNumber.addEventListener("input", (e)=> {
  const searchNumResult = searchPokByNumber(e.target.value);
  console.log(e.target.value);
  console.log(searchNumResult);
})

//ventana del modal para cerrar
const cerrarN = document.getElementById('cerrar');
//para cerrar la ventana emergente
cerrarN.addEventListener('click', () =>  {
  const msj = document.getElementById('msj');
  msj.classList.remove('show');
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
  const filtrado = filtradoTipo(selectType.value);
  console.log(filtrado);
});


//filtrar por debilidad
const selectWeaknesses = document.getElementById("element-weaknesses-filter");
selectWeaknesses.addEventListener("change", () => {
  const filtradoD = filtradoDebilidad(selectWeaknesses.value);
  console.log(filtradoD);
});


//filtrar por fortaleza
const selectResistant = document.getElementById('element-resistant-filter');
selectResistant.addEventListener("change", () => {
  const filtradoR = filtradoResistencia(selectResistant.value);
  console.log(filtradoR)
});


//ordenar de la A-Z
const orderAz = document.getElementById("az");
orderAz.addEventListener("click", () => {
  const datosOrdenados = ordenarPorNombreAz(data);
  // Manipulación del DOM para mostrar los datos ordenados
  console.log(datosOrdenados);
});


//ordenar de la Z-A
const invertirZa = document.getElementById("za");
invertirZa.addEventListener("click", () => {
  const datosInvertidos = invertirYOrdenarPorNombreZa(data);
  // Manipulación del DOM para mostrar los datos invertidos y ordenados
  console.log(datosInvertidos);
});


//ordenar ascendentemente
const menorAmayor = document.getElementById("ascendente");
menorAmayor.addEventListener("click", () => {
  const datosOrdenados = ordenarPorNumeroAscendente(data);
  // Manipulación del DOM para mostrar los datos ordenados por número ascendente
  console.log(datosOrdenados);
});


//ordenar descendentemente
const mayorAmenor = document.getElementById("descendente");
mayorAmenor.addEventListener("click", () => {
  const datosOrdenados = ordenarPorNumeroDescendente(data);
  // Manipulación del DOM para mostrar los datos ordenados por número descendente
  console.log(datosOrdenados);
});


//calcular fuerza
const select = document.getElementById('element-strong-filter');
select.addEventListener('change', () => {
  const option = select.value;
  let pokemonsOrdenados;
  if (option === 'strongest') {
    pokemonsOrdenados = data.pokemon.sort((a, b) => calcularFuerza(b) - calcularFuerza(a)).slice(0, 10);
  } else if (option === 'weaknest') {
    pokemonsOrdenados = data.pokemon.sort((a, b) => calcularFuerza(a) - calcularFuerza(b)).slice(0, 10);
  } else {
    pokemonsOrdenados = data;
  }
  console.log(pokemonsOrdenados);
});

//reproductor
const reproductor = document.getElementById('reproductor');
reproductor.volume = 0.05;
