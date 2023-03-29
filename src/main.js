import { dataFilter } from './data.js';
import { sortData } from './data.js';
import { stats } from './data.js';

import data from './data/ghibli/ghibli.js';

console.log(dataFilter, sortData, stats, data);

/* const pelis = data.films
    .map(element => element.poster)
    .map(element => element + "-------------------")
    .map(url => url.replaceAll("/","<3"))
    .filter(url => url.includes("My")); */

/*data.films
    .map(element => element.poster)
    .filter(url => url.includes("https"))
    .map(url => createImage(url))
    .forEach(image => document.getElementById("filmsZone").appendChild(image))

function createImage(uri){
    const image = document.createElement('img');
    image.src = uri
    image.className = "imagenes";
    return image
}
*/