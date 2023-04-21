import {searchPokByName, filtradoTipo, filtradoDebilidad, filtradoResistencia} from "./data.js";

//main.js, importa las funciones exportadas de data.js y las usa para realizar la manipulación de dato
//buscar por nombre
const btnBuscarByName = document.getElementById("search");
btnBuscarByName.addEventListener("input", (e) => {
  const searchingResult = searchPokByName(e.target.value);
  console.log(e.target.value);
  console.log(searchingResult);
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



// estas funciones son de ejemplo
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

