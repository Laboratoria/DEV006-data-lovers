/* eslint-disable no-console */
import data from './data/lol/lol.js';
//CALCULO AGREGADO

const tagsChampion = Object.values(data.data);
console.log(tagsChampion)

for (const championtags in tagsChampion) {

  const tags = tagsChampion[championtags].tags;
  console.log(tags);
}

function contarRol(tagsChampion, rol) {
  let count = 0;
  for (let i = 0; i < tagsChampion.length; i++) {
    if (tagsChampion[i].tags.includes(rol)) {
      count++;
    }
  }
  return ((count * 100) / tagsChampion.length).toFixed(2) + '%';
}
document.addEventListener("DOMContentLoaded", function () {


  const resultado = contarRol(tagsChampion, "Fighter");
  console.log(resultado);
  const resultado2 = contarRol(tagsChampion, "Assassin");
  console.log(resultado2);
  const resultado3 = contarRol(tagsChampion, "Tank");
  console.log(resultado3);
  const resultado4 = contarRol(tagsChampion, "Mage");
  console.log(resultado4);
  const resultado5 = contarRol(tagsChampion, "Support");
  console.log(resultado5);
  const resultado6 = contarRol(tagsChampion, "Marksman");
  console.log(resultado6);



  document.querySelector(".Percentage1").innerHTML = resultado;
  document.querySelector(".Percentage2").innerHTML = resultado2;
  document.querySelector(".Percentage3").innerHTML = resultado3;
  document.querySelector(".Percentage4").innerHTML = resultado4;
  document.querySelector(".Percentage5").innerHTML = resultado5;
  document.querySelector(".Percentage6").innerHTML = resultado6;
});



export { contarRol };