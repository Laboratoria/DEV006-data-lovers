import { filtrarTipo, mostrarPokemon, ordenar } from './data.js';
// import data from './data/lol/lol.js';
import {Objetos} from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const listaPokemon = document.querySelector('#listaPokemon');
const btnFiltro = document.querySelectorAll('.filtro-tipo');
const btnData = document.getElementById('ver-todos');
const btnAz=document.getElementById('filtrarAz');





document.addEventListener('DOMContentLoaded', mostrarPokemon); 
btnData.addEventListener('click', mostrarPokemon);
btnFiltro.forEach(boton => boton.addEventListener ('click', filtrarTipo));
btnAz.addEventListener("click", ordenar);





