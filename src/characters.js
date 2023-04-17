import { getCharacters } from "./data.js";
// getCharacters()

const characters = getCharacters();
console.log(characters);
const container = document.querySelector(".container");
console.log(container);

/*const elements = [];
for (const character in characters){
  const element = `
   <div class="card"> 
            <div class="card-body"> 
              <a href=" "> <img src="${character.image}"></a>
              <div>
                <h5 class="card-title">${character.name}</h5>
              </div>
            </div>
          </div>
    `;
  elements.push(element);
} 
container.innerHTML = elements; */


container.innerHTML = characters.map(character =>`
    <div class="card"> 
            <div class="card-body"> 
              <a href=" "> <img src="${character.image}"></a>
              <div>
                <h5 class="card-title">${character.name}</h5>
              </div>
            </div>
          </div>
    `
);

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(query)
  );
  renderCharacters(filteredCharacters);
});

function renderCharacters(characters) {
  container.innerHTML = characters.map(character => `
    <div class="card"> 
      <div class="card-body"> 
        <a href=" "> <img src="${character.image}"></a>
        <div>
          <h5 class="card-title">${character.name}</h5>
        </div>
      </div>
    </div>
  `).join("");
}
renderCharacters(characters);
    

