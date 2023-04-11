import { filtrarTipo, mostrarPokemon } from './data.js';
// import data from './data/lol/lol.js';
import {Objetos} from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(Objetos.pokemon.length);


const listaPokemon = document.querySelector('#listaPokemon');
const btnFiltro = document.querySelectorAll('.filtro-tipo');
const btnData = document.getElementById('ver-todos');

document.addEventListener('DOMContentLoaded', mostrarPokemon); 
btnData.addEventListener('click', mostrarPokemon);


btnFiltro.forEach(boton => boton.addEventListener ('click', filtrarTipo));

