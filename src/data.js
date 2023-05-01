import {Objetos} from './data/pokemon/pokemon.js';

export  function mostrarPokemon(data) {
  const filterByType = data.length > 0 ? data: Objetos.pokemon
  let pokemonAgregado=[];
  const listaPokemon = document.getElementById('listaPokemon');
  
  
  filterByType.forEach(pokemon => {
    const div = document.createElement('div');
    div.classList.add('pokemon');
    div.innerHTML = `
 <div class="pokemonImagen">
 <img  src="./img/pokebola.png" id="${pokemon.type}" class="pokebola" alt="imagen pokebola" width="25px" height="25px">
<img src="${pokemon.img}" alt="${pokemon.name}" class="pokemonImg">
</div>
<div class="pokemon-info">
  <div class="nombre-contenedor">
     <p class="pokemon-id">${pokemon.num}</p>
     <h2 class="pokemon-nombre">${pokemon.name}</h2>
</div>
<div class="pokemon-tipos">
   <p class="tipo">${pokemon.type}</p>
</div>
<button type="button" class="btn-modal" id="${pokemon.num}">Ver mas</button>
</div>
  
 `
    listaPokemon.append(div);

  });

  

  const abrir=document.querySelectorAll(".btn-modal");
  const modalC=document.querySelector("#contentModal");
 

  abrir.forEach( (btn,index)=>btn.addEventListener("click", (e)=>{
    e.preventDefault();
   
      
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    const divDos = document.createElement("div");
   
    divDos.classList.add(".modal");
    const modalHtml=`
   
   <div class="modal modal-close" >
     <p class="close"><i class="fa-solid fa-circle-xmark"></i><p>
     
     <div class="imagen-pokemon">
      <div class="num-size">
       <img src="${filterByType[index].img}">
       <p class="numeroPokemon" >${filterByType[index].num}</p>
       <p class="nombrePokemon">${filterByType[index].name}</p>
       </div>
       <div class="caja1">
       <h3 class="numeroPokemon">Size</h3>
       <p class="numeroPokemon">Height:${filterByType[index].size.height}</p>
       <p class="numeroPokemon">Weight:${filterByType[index].size.weight}</p>
       <h3>Pokemon-rarity</h3>
       <p class="ataque">${filterByType[index]["pokemon-rarity"]}
       </div>
       </div>
     <div class="baseDefensa">
      <div>
       <p class="about">${filterByType[index].about}</p>
       </div>
       <div class="contenedorResistencia">
       <div class="resistencia">
       <h3>Resistance</h3>
        <p class="resistencia">${filterByType[index].resistant.join("/ ")}</p>
        </div>
        <div class="weakness">
        <h3>Weaknesses</h3>
          <p class="debilidad">${filterByType[index].weaknesses.join("/ ")}</p> 
      </div>
      </div>
      <div class="contenedorStats">
       <div class="stats">
      <h3>Stats</h3>
      <p class="ataque"><i class="fa-solid fa-check"></i>Base-attack:${filterByType[index].stats["base-attack"]}</p>
      <p class="defensa"><i class="fa-solid fa-check"></i></i>Base-defense:</i>${filterByType[index].stats["base-defense"]}</p>
      <p class="defensa"><i class="fa-solid fa-check"></i></i>Base-stamina:</i>${filterByType[index].stats["base-stamina"]}</p>
      <p class="defensa"><i class="fa-solid fa-check"></i></i>Max-cp:</i>${filterByType[index].stats["max-cp"]}</p>
      <p class="defensa"><i class="fa-solid fa-check"></i></i>Max-hp:</i>${filterByType[index].stats["max-hp"]}</p>
      </div>
      <div class="specialAtack">
      <h3>Special special-attack</h3>
      <ul>
        <li><i class="fa-solid fa-check"></i>Name:${filterByType[index]["special-attack"][0].name}</li>
        <li><i class="fa-solid fa-check"></i>Type:${filterByType[index]["special-attack"][0].type}</li>
       <li><i class="fa-solid fa-check"></i>Base-Damage:${filterByType[index]["special-attack"][0]["base-damage"]}</li>
        <li><i class="fa-solid fa-check"></i>Energy:${filterByType[index]["special-attack"][0].energy}</li>
        <li><i class="fa-solid fa-check"></i>Move-duration:${filterByType[index]["special-attack"][0]["move-duration-seg"]}</li>
        </ul>
      </div>
   </div>
    <div class="evolution">
   <h3>Nex Evolution</h3>
   <p class="evolucion"> ${filterByType[index].evolution["next-evolution"]}</p>
   <p class="evolucion">${filterByType[index].evolution}</p> 
    </div>
</div>
 
 
   `
   
    divDos.innerHTML = modalHtml
    modalC.append(divDos);


    const modal=document.querySelectorAll(".modal")[0];
    const cerrarModal=document.querySelector(".close");
    modal.classList.toggle("modal-close");
   
    cerrarModal.addEventListener("click", ()=>{
      divDos.innerHTML="";

      modal.classList.toggle("modal-close");
    
      modalC.style.opacity="0";
      modalC.style.visibility="hidden";
    
      
  
    });

  
  }));
}


export function datosTarjeta(pokebo){
  const pokebolaInfo={
    
    imagen:pokebo.querySelector(".pokemonImg").src,
    nombre: pokebo.querySelector("h2").textContent,
    numero: pokebo.querySelector("p").textContent,
    tipo: pokebo.querySelector(".tipo").textContent,
    cantidad: 1
    
  }
  return pokebolaInfo
}



export function filtradoPorTipo(data,type) {
  const datosFiltrados = data.filter(elemento => elemento.type.includes(type))
  return datosFiltrados
}




export function ordenar(data){
  const filterByType = data.length > 0 ? [...data] : [...Objetos.pokemon]
  
  const result=filterByType.sort(function(a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  return result
}





export function ordenarZa(data){
  
  const filterByType = data.length > 0 ? [...data]: [...Objetos.pokemon]

  const result=filterByType.sort(function(a, b) {
    if (a.name < b.name) {

      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  });
 
  return result
}
 


export function busquedaName(){

  const input=document.getElementById("busqueda");
  const searchName=Objetos.pokemon.filter(pokemon=>pokemon.name.toLowerCase().match((input.value.toLowerCase())))
  return searchName
}


