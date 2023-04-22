//de pagina intro a login
const pasarPag = document.getElementById('boton-next');
pasarPag.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href ="login.html";
});
