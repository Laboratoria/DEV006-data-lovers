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
  const listaPokemon = document.getElementById('listaPokemon');
  
  filterByType.forEach(pokemon => {
    const div = document.createElement('div');
    div.classList.add('pokemon');
    div.innerHTML = `
 <div class="pokemonImagen">
<img src="${pokemon.img}" alt="${pokemon.name}">
</div>
<div class="pokemon-info">
  <div class="nombre-contenedor">
     <p class="pokemon-id">${pokemon.num}</p>
     <h2 class="pokemon-nombre">${pokemon.name}</h2>
</div>
<div class="pokemon-tipos">
   <p class="tipo">${pokemon.type}</p>
</div>
<div class="pokemon-medidas">
   <p class="medida">${pokemon.size.height}</p>
   <p class="medida">${pokemon.size.weight}</p>
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
     <div class="caja1">
     <div class="imagen-pokemon">
       <img src="${filterByType[index].img}">
       <p class="nombrePokemon">${filterByType[index].name}</p>
       <p class="numeroPokemon">${filterByType[index].num}</p>
     </div>
     <div class="infoGeneral">
       <p><i class="fa-solid fa-circle"></i>${filterByType[index].about}</p>
     </div>
   </div>
   <div class="caja-alineada">
     <div class="baseDefensa">
       <p class="ataque"><i class="fa-solid fa-circle"></i>${filterByType[index].stats["base-attack"]}</p>
       <p class="defensa"><i class="fa-solid fa-circle"></i>${filterByType[index].stats["base-defense"]}</p>
     </div>
     <div class="resistant">
     <h3>resistant</h3>
     <p class="resistencia">${filterByType[index].resistant}</p>
   </div>
   <div class="weaknesses">
   <h3>weaknesses</h3>
   <p class="debilidad">${filterByType[index].weaknesses}</p>
 </div>
</div>
<div class="caja-alineada2">
   <div class="special-attack">
 <h3>Special special-attack</h3>
 <ul>
 <li>${filterByType[index]["special-attack"][0].name}</li>
 <li>${filterByType[index]["special-attack"][0].type}</li>
 <li>${filterByType[index]["special-attack"][0]["base-damage"]}</li>
 <li>${filterByType[index]["special-attack"][0].energy}</li>
 <li>${filterByType[index]["special-attack"][0]["move-duration-seg"]}</li>
 </ul>
</div>
 <div class="evolution">
   <h3>Evolucion</h3>
   <p class="evolucion">${filterByType[index].evolution.candy}</p>
 </div>
</div>
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




export function filtradoPorTipo(data,type){
  const datosFiltrados=data.filter(elemento=>elemento.type.includes(type))
  return datosFiltrados
}


export function ordenar(data){
  const filterByType = data.length > 0 ? data: Objetos.pokemon
  
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
  
  const filterByType = data.length > 0 ? data: Objetos.pokemon

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
 
  
