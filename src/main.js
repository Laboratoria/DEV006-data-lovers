//import { pokemon } from './data.js';
// import data from './data/lol/lol.js';
import {Objetos} from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(Objetos.pokemon.length);

const listaPokemon = document.querySelector('#listaPokemon');

//for(let i = 1; i.length<=251; i++);

document.addEventListener('DOMContentLoaded', mostrarPokemon); 

function mostrarPokemon(pokemones) {
    Objetos.pokemon.forEach(pokemones => {
   const div = document.createElement('div');
   div.classList.add('pokemon');
   div.innerHTML = `
   <div class="pokemonImagen">
 <img src="${pokemones.img}" alt="${pokemones.name}">
</div>
<div class="pokemon-info">
 <div class="nombre-contenedor">
     <p class="pokemon-id">${pokemones.num}</p>
     <h2 class="pokemon-nombre">${pokemones.name}</h2>
 </div>
 <div class="pokemon-tipos">
     <p class="tipo">${pokemones.type}</p>
 </div>
 <div class="pokemon-medidas">
     <p class="medida">${pokemones.size.height}</p>
     <p class="medida">${pokemones.size.weight}</p>
 </div>
</div>
    
   `
   listaPokemon.append(div);
   });
    
    };

   

