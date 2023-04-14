import { getCharacters } from "./data.js";
// getCharacters()

const characters = getCharacters()
console.log(characters); {
let body= ""
for (let i = 0; i<characters.lenght; i++){
    body += '<tr><td>${characters[i].id}</td></tr>'
    }
}
