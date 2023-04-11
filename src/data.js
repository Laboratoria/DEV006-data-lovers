import {Objetos} from './data/pokemon/pokemon.js';

// estas funciones son de ejemplo


export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};


export  function mostrarPokemon(data) {
  const filterByType = data.length > 0 ? data: Objetos.pokemon

  filterByType.forEach(pokemones => {
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

export function filtrarTipo(event) {
 const botonId = event.currentTarget.id;
 console.log(botonId);
listaPokemon.innerHTML = " ";
 const tipos = Objetos.pokemon.filter(pokemon => pokemon.type.includes(botonId))
 mostrarPokemon(tipos);
} 




