import { example } from './data.js';
import data from './data/lol/lol.js';
import { header,footer } from './content.js';
//importa el codigo de content.js y se ve en mi web como html
const mainContainer = document.createElement(`div`);
mainContainer.innerHTML = header;
document.body.appendChild(mainContainer);

const footContainer = document.createElement(`footer`);
footContainer.innerHTML = footer;
document.body.appendChild(footContainer);


console.log(example, data);