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


/*Contador*/
const countGryffindor = studentsPerProperty(charactersData, "house", "Gryffindor");

const phouses = document.getElementById("housesInfo")
phouses.innerHTML += `${countGryffindor}`