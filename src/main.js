import { dataFilter } from './data.js';
import { sortData } from './data.js';
import { stats } from './data.js';

import data from './data/ghibli/ghibli.js';

console.log(dataFilter, sortData, stats, data);

class titleAndPoster {
    constructor(title, poster,director,release_date,rt_score,description) {
        this.poster = createImage(poster);
        this.title = createTitle(title);
        this.director = createTitle(director);
        this.release_date = createTitle(release_date);
        this.rt_score = createTitle(rt_score);
        this.description = createTitle(description);

    }
}

data.films
    .map(film => new titleAndPoster(film.title,film.poster,film.director,film.release_date,film.rt_score,film.description))
    .map(Element => divCreator(Element))
    .forEach(movieDiv =>document.getElementById("filmsZone").appendChild(movieDiv))

function divCreator(x){
    const movieDiv = document.createElement("div");
    movieDiv.className = "filmDivs"
    movieDiv.appendChild(x.poster);
    movieDiv.appendChild(divCreatorhover(x))
    return movieDiv
}

function divCreatorhover(x){
    const movieDivHover = document.createElement("div");
    movieDivHover.className = "filmDivsHover"
    movieDivHover.appendChild(x.title);
    movieDivHover.appendChild(x.director);
    movieDivHover.appendChild(x.release_date);
    movieDivHover.appendChild(x.rt_score);
    movieDivHover.appendChild(x.description);
    return movieDivHover
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
    title.className =  "titles";
    return title
}



