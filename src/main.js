import data from './data/harrypotter/data.js';
import {genderPorcentage} from './data.js';
// totalCharacters=

// const malePercentage = maleCount / totalCharacters * 100;

// // Get the female percentage
// const femalePercentage = femaleCount / totalCharacters * 100;

// Update the values of the span elements
document.getElementById("malePercentage").innerText = genderPorcentage('Male',data.characters);
document.getElementById("femalePercentage").innerText = genderPorcentage('Female',data.characters);


 