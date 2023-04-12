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
<button type="button" class="btn-modal" id="${pokemones.num}">Ver mas</button>
</div>
  
 `
 listaPokemon.append(div);

 

 });

 const abrir=document.querySelectorAll(".btn-modal");
 const modal=document.querySelectorAll(".modal");
 const modalC=document.querySelectorAll(".contenedorModal");
 console.log(abrir)
 
 abrir.forEach( btn=>btn.addEventListener("click", (e)=>{
   e.preventDefault();
   modalC.style.opacity="1";
   modal.style.visibility="visible";
   modal.classList.toggle("modal-close");
   
   }))


  
  };

export function filtrarTipo(event) {
 const botonId = event.currentTarget.id;
 console.log(botonId);
listaPokemon.innerHTML = " ";
 const tipos = Objetos.pokemon.filter(pokemon => pokemon.type.includes(botonId))
 mostrarPokemon(tipos);
} 




