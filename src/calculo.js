/* eslint-disable no-console */


document.addEventListener('DOMContentLoaded', () => {
  const btMenuc = document.querySelector('.bt-menuc');
  const ulc = document.querySelector('.contenidoc');

  btMenuc.addEventListener('click', () => {
    ulc.classList.toggle('contenidoc');
    console.log(btMenuc)
  });

});





