import { getCharacters } from "./data.js";
// getCharacters()

const characters = getCharacters();
console.log(characters);
const container = document.querySelector(".container");
console.log(container);
container.innerHTML = characters.map(character =>`
    <div class="card"> 
            <div class="card-body"> 
              <a href=" "> <img src="${character.image}" ></a>
              <div>
                <h5 class="card-title">${character.name}</h5>
              </div>
            </div>
          </div>

    `
);
/*function createdCards(usuarios) {
 
  });
}
*/