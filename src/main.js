import { mostrarPokemon, ordenar,ordenarZa,busquedaName,filtradoPorTipo,datosTarjeta } from './data.js';
// import data from './data/lol/lol.js';
import {Objetos} from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';



let pokemonPantalla=Objetos.pokemon


const btnFiltro = document.querySelectorAll('.filtro-tipo');
const btnData = document.getElementById('ver-todos');
const btnAz=document.getElementById('filtrarAz');
const btnZa=document.getElementById('filtrarZa');
const listaPokemon = document.getElementById('listaPokemon');
const iconobusqueda=document.getElementById("icono-busqueda");
const navburger=document.querySelector(".nav-burger");
const navMenu2=document.querySelector(".menu-nav2");
navburger.addEventListener("click", ()=>
  navMenu2.classList.toggle("nav-menu_visible"));
const contenedorPokebola=document.querySelector("#lista-pokebola")
const vaciarPokebola=document.querySelector("#vaciar-pokebola")

  

document.addEventListener('DOMContentLoaded', mostrarPokemon); 

// hay un error en nuestra funcion de mostrar todos solo funciona una vez 
btnData.addEventListener('click', () => {
  listaPokemon.innerHTML = " ";
  mostrarPokemon()
})


btnFiltro.forEach(boton => boton.addEventListener ('click', (e)=> {
  listaPokemon.innerHTML=" ";
  const type=e.currentTarget.id
  pokemonPantalla=filtradoPorTipo(Objetos.pokemon,type)
  mostrarPokemon(pokemonPantalla)
}));

btnAz.addEventListener("click", ()=>{
  listaPokemon.innerHTML=" ";
  const ordenarAzz = ordenar(pokemonPantalla)
  mostrarPokemon(ordenarAzz)
 
 
});

btnZa.addEventListener("click", ()=>{
  listaPokemon.innerHTML = " ";
  const ordenarZaa =  ordenarZa(pokemonPantalla)
  mostrarPokemon(ordenarZaa)
  
});


iconobusqueda.addEventListener("click", ()=>{
  listaPokemon.innerHTML = " ";
  pokemonPantalla = busquedaName();
  mostrarPokemon(pokemonPantalla) 
})


listaPokemon.addEventListener("click",agregarCurso)
let agregandoTipo=[];

function agregarCurso(e){
  
  if(e.target.classList.contains("pokebola")){
    const pokeboTarjeta=e.target.parentElement.parentElement;
    const datitos=datosTarjeta(pokeboTarjeta);
    agregandoTipo=[...agregandoTipo,datitos]
   console.log(agregandoTipo)
   console.log(carritoHTML(agregandoTipo))
  }

  
}

function carritoHTML(articulos){
  contenedorPokebola.innerHTML=" ";
  articulos.forEach(elemento=>{
    const filas=document.createElement("tr");
    filas.innerHTML= `
    <td>
    $elemento.name
    </td>
    `

    contenedorPokebola.appendChild(filas)
  })
}




