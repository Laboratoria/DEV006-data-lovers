import { mostrarPokemon, ordenar,ordenarZa,busquedaName,filtradoPorTipo } from './data.js';
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

  

document.addEventListener('DOMContentLoaded', mostrarPokemon); 
btnData.addEventListener('click', mostrarPokemon);
btnFiltro.forEach(boton => boton.addEventListener ('click', (e)=> {

  listaPokemon.innerHTML=" ";
  const type=e.currentTarget.id
  pokemonPantalla=filtradoPorTipo(Objetos.pokemon,type)
  mostrarPokemon(pokemonPantalla)
}));

btnAz.addEventListener("click", ()=>{
  listaPokemon.innerHTML=" ";
  
  const ordenarAzz= ordenar(pokemonPantalla) 
  mostrarPokemon(ordenarAzz)
});

btnZa.addEventListener("click", ()=>{

  listaPokemon.innerHTML=" ";
  const ordenarZaa= ordenarZa(pokemonPantalla) 
  mostrarPokemon(ordenarZaa)
});


iconobusqueda.addEventListener("click", ()=>{
  listaPokemon.innerHTML = " ";
  pokemonPantalla=busquedaName();
  mostrarPokemon(pokemonPantalla)
})

