import { charactersData } from "./data.js";
import { studentsPerProperty } from "./data.js";

/*Cantida de personajes por Casa*/

/*Gryffindor*/
const countGryffindor = studentsPerProperty(
  charactersData,
  "house",
  "Gryffindor"
);
const totalStudentsG = countGryffindor.Gryffindor;


/*Hufflepuff*/
const countHufflepuff = studentsPerProperty(
  charactersData,
  "house",
  "Hufflepuff"
);
const totalStudentsH = countHufflepuff.Hufflepuff;


/*Ravenclaw*/
const countRavenclaw = studentsPerProperty(
  charactersData,
  "house",
  "Ravenclaw"
);
const totalStudentsR = countRavenclaw.Ravenclaw;


/*Slytherin*/
const countSlytherin = studentsPerProperty(
  charactersData,
  "house",
  "Slytherin"
);
const totalStudentsS = countSlytherin.Slytherin;



/*Porcentajes*/
/*convierte string en número*/
const totalStudents = charactersData.length;

/*Gryffindor*/
/*toFixed vuelve a decimales y entre parentesis la cantidad de decimales*/
const porcentajeG = ((totalStudentsG / totalStudents) * 100).toFixed(2);
const resultadoG = porcentajeG + "%";

/*Hufflepuff*/
const porcentajeH = ((totalStudentsH / totalStudents) * 100).toFixed(2);
const resultadoH = porcentajeH + "%";

/*Ravenclaw*/
const porcentajeR = ((totalStudentsR / totalStudents) * 100).toFixed(2);
const resultadoR = porcentajeR + "%";

/*Slytherin*/
const porcentajeS = ((totalStudentsS / totalStudents) * 100).toFixed(2);
const resultadoS = porcentajeS + "%";




/*Modal*/
const modal = document.getElementById("myModal");
const gryffindorBttn = document.getElementById("imageG");
const hufflepuffBttn = document.getElementById("imageH");
const ravenclawBttn = document.getElementById("imageR");
const slytherinBttn = document.getElementById("imageS");

const span = document.getElementsByClassName("close")[0];

function openModal(house) {
  let imagenFon = "";
  const housesInfor = document.getElementById("housesInfo");
  housesInfor.innerHTML = "";
  switch (house) {
  case "Gryffindor":
    imagenFon = "./images/Gryffindorfond.jpg";
    housesInfor.innerHTML += `<img class="imagenFond" src="${imagenFon}" alt="imagen fondo Gryffindor"><br>
      El total de estudiantes de Gryffindor es de <strong>${totalStudentsG}</strong>
      con un porcentaje de <strong>${resultadoG}<strong>`;
    break;
  case "Hufflepuff":
    imagenFon = "./images/hufflepuffFondo.jpg";
    housesInfor.innerHTML += `<img class="imagenFond" src="${imagenFon}" alt="imagen fondo Hufflepuff"><br>
      El total de estudiantes de Hufflepuff es de <strong>${totalStudentsH}</strong>
      con un porcentaje de <strong>${resultadoH}<strong>`;
    break;
  case "Ravenclaw":
    imagenFon = "./images/ravenclawfond.png";
    housesInfor.innerHTML += `<img class="imagenFond" src="${imagenFon}" alt="imagen fondo Ravenclaw"><br>
      El total de estudiantes de Ravenclaw es de <strong>${totalStudentsR}</strong>
      con un porcentaje de <strong>${resultadoR}<strong>`;
    break;
  case "Slytherin":
    imagenFon = "./images/slytherinfon.jpg";
    housesInfor.innerHTML += `<img class="imagenFond" src="${imagenFon}" alt="imagen fondo Slytherin"><br>
      El total de estudiantes de Slytherin es de <strong>${totalStudentsS}</strong> con un porcentaje de
       <strong>${resultadoS}<strong>`;
    break;
  default:
    housesInfor.innerHTML = "No se encontró la casa seleccionada";
    break;
  }
  modal.style.display = "block";
}

gryffindorBttn.addEventListener("click", function () {
  openModal("Gryffindor");
});

hufflepuffBttn.addEventListener("click", function () {
  openModal("Hufflepuff");
});

ravenclawBttn.addEventListener("click", function () {
  openModal("Ravenclaw");
});

slytherinBttn.addEventListener("click", function () {
  openModal("Slytherin");
});

span.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

