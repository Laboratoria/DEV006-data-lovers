import { dataFilter } from './data.js';
import { sortData } from './data.js';
import { stats } from './data.js';

import data from './data/ghibli/ghibli.js';

console.log(dataFilter, sortData, stats, data);

class titleAndPoster {
    constructor(title, poster) {
        this.poster = createImage(poster);
        this.title = createTitle(title);

    }
}

data.films
    .map(film => new titleAndPoster(film.title,film.poster))
    .map(Element => divCreator(Element))
    .forEach(movieDiv =>document.getElementById("filmsZone").appendChild(movieDiv))

function divCreator(x){
    const movieDiv = document.createElement("div");
    movieDiv.className = "filmDivs"
    movieDiv.appendChild(x.title);
    movieDiv.appendChild(x.poster);
    return movieDiv
}

function createImage(uri){
        const image = document.createElement('img');
        image.src = uri
        image.className = "posterImages";
        return image
}

function createTitle(titleMovie){
    const title = document.createElement("p");
    title.innerText = titleMovie;
    title.className = "titles";
    return title
}

