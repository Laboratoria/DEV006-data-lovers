import { example } from './data.js';
import data from './data/lol/lol.js';
import { header } from './content.js';

const mainContainer = document.createElement(`div`);

mainContainer.innerHTML = header;
document.body.appendChild(mainContainer);


console.log(example, data);