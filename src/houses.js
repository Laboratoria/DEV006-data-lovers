import { charactersData } from "./data.js";
import { studentsPerProperty } from "./data.js";

/*Modal*/
var modal = document.getElementById("myModal");
var gryffindorBttn = document.getElementById("imageG");
var span = document.getElementsByClassName("close")[0];

gryffindorBttn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


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

/*Contador*/
const phouses = document.getElementById("housesInfo")
phouses.innerHTML += `${countGryffindor}`


/*Porcentajes*/
const totalStudents = charactersData.length;
console.log(totalStudents)
/*Gryffindor*/
const porcentajeG = ((totalStudentsG/totalStudents)*100).toFixed(2);
console.log(parseFloat(porcentajeG)+ "%")
/*Hufflepuff*/
const porcentajeH = ((totalStudentsH/totalStudents)*100).toFixed(2);
console.log(parseFloat(porcentajeH)+ "%")
/*Ravenclaw*/
const porcentajeR = ((totalStudentsR/totalStudents)*100).toFixed(2);
console.log(parseFloat(porcentajeR)+ "%")
/*Slytherin*/
const porcentajeS = ((totalStudentsS/totalStudents)*100).toFixed(2);
console.log(parseFloat(porcentajeS)+ "%")