import { charactersData } from "./data.js";
import { studentsPerProperty } from "./data.js";

/*Contador*/

const pHouses = document.getElementById("housesInfo");
pHouses.innerHTML = "";
document.getElementsByClassName("close");
const myModal=document.getElementById("modal");
document.getElementById("imageOne").addEventListener("mouseover", imagesOne);
myModal.classList.remove("modal");
myModal.classList.add("close")
function imagesOne() {
    
  const countByproperty = studentsPerProperty(
    charactersData,
    "house",
    "Gryffindor"
  );
  pHouses.innerHTML = `"La cantidad de estudiantes en la casa Gryffindor es de   ${countByproperty}` ;
  console.log(countByproperty);
}
