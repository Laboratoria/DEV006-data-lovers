import { charactersData } from "./data.js";
import { studentsPerProperty } from "./data.js";

/*Cantida de personajes por Casa*/

/*Gryffindor*/
const countGryffindor = studentsPerProperty(charactersData, "house", "Gryffindor");
const totalStudentsG = countGryffindor.Gryffindor;
console.log(totalStudentsG)
/*Hufflepuff*/
const countHufflepuff = studentsPerProperty(charactersData, "house", "Hufflepuff");
const totalStudentsH = countHufflepuff.Hufflepuff;
console.log(totalStudentsH)
/*Ravenclaw*/
const countRavenclaw = studentsPerProperty(charactersData, "house", "Ravenclaw");
const totalStudentsR = countRavenclaw.Ravenclaw;
console.log(totalStudentsR)
/*Slytherin*/
const countSlytherin = studentsPerProperty(charactersData, "house", "Slytherin");
const totalStudentsS = countSlytherin.Slytherin;
console.log(totalStudentsS)

/*Porcentajes*/
/*convierte string en número*/
const totalStudents = charactersData.length;
console.log(totalStudents)
/*Gryffindor*/
const porcentajeG = ((totalStudentsG / totalStudents) * 100).toFixed(2);
const resultadoG = (porcentajeG) + "%"

/*Hufflepuff*/
const porcentajeH = ((totalStudentsH / totalStudents) * 100).toFixed(2);
const resultadoH = (porcentajeH) + "%"
/*Ravenclaw*/
const porcentajeR = ((totalStudentsR / totalStudents) * 100).toFixed(2);
const resultadoR = (porcentajeR) + "%"
/*Slytherin*/
const porcentajeS = ((totalStudentsS / totalStudents) * 100).toFixed(2);
const resultadoS = (porcentajeS) + "%"


/*modal*/
const modal = document.getElementById("myModal");
const gryffindorBttn = document.getElementById("imageG");
const hufflepuffBttn = document.getElementById("imageH");
const ravenclawBttn = document.getElementById("imageR");
const slytherinBttn = document.getElementById("imageS");
const span = document.getElementsByClassName("close")[0];

const modalHouses = (elementbtn) => {
  if (elementbtn) {
    elementbtn.onclick = function () {
      modal.style.display = "block";
    }
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
const modalG = modalHouses(gryffindorBttn);
const modalH = modalHouses(hufflepuffBttn);
const modalR = modalHouses(ravenclawBttn);
const modalS = modalHouses(slytherinBttn);

const phouses = document.getElementById("housesInfo")
/*display info en modal*/
phouses.innerHTML="";
if (modalG) {
  phouses.innerHTML+= `El total de estudiantes de Gryffindor es de <strong>${totalStudentsG}</strong>
con un porcentaje de <strong>${resultadoG}<strong> `
}
else if (modalH){
  phouses.innerHTML+= `El total de estudiantes de Hufflepuff es de <strong>${totalStudentsH}</strong>
  con un porcentaje de <strong>${resultadoH}<strong> `
}
else if  (modalR){
  phouses.innerHTML+=  `El total de estudiantes de RavenclawB es de <strong>${totalStudentsR}</strong>
    con un porcentaje de <strong>${resultadoR}<strong> `
}else {
  phouses.innerHTML+= `El total de estudiantes de Slytherin es de <strong>${totalStudentsS}</strong>
      con un porcentaje de <strong>${resultadoS}<strong> `
}

