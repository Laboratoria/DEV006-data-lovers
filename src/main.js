import { filtrarTipo, mostrarPokemon, ordenar,ordenarZa,busquedaName } from './data.js';
// import data from './data/lol/lol.js';
import {Objetos} from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';



let pokemonPantalla=Objetos.pokemon
console.log(pokemonPantalla)
const listaPokemon = document.querySelector('#listaPokemon');
const btnFiltro = document.querySelectorAll('.filtro-tipo');
const btnData = document.getElementById('ver-todos');
const btnAz=document.getElementById('filtrarAz');
const btnZa=document.getElementById('filtrarZa');
const inputBuscar=document.getElementById("busqueda")
const iconobusqueda=document.getElementById("icono-busqueda");
const navburger=document.querySelector(".nav-burger");
const navMenu2=document.querySelector(".menu-nav2");
navburger.addEventListener("click", ()=>
navMenu2.classList.toggle("nav-menu_visible"));

  

document.addEventListener('DOMContentLoaded', mostrarPokemon); 
btnData.addEventListener('click', mostrarPokemon);
btnFiltro.forEach(boton => boton.addEventListener ('click', (e)=> {
    pokemonPantalla=filtrarTipo(e)
}));

btnAz.addEventListener("click", (e)=>{
    ordenar(pokemonPantalla)
});
btnZa.addEventListener("click", (e)=>{
    ordenarZa(pokemonPantalla)});


iconobusqueda.addEventListener("click", ()=>{
pokemonPantalla=busquedaName()})

