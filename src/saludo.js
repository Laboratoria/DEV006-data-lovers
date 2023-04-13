//crear la funcion llamada transicion
//seleccionar el div dialogo1 x su id y decirle que se debe ocultar con el none
//despues llamar al otro div dialogo2 x su id y decirle que debe mostrarse en pantalla 
//todo esto ocurrira dentro de 3segundos
function transicion() {
  document.getElementById("dialogo1").style.display="none";
  document.getElementById("dialogo2").style.display="flex";
}

setTimeout(transicion, 3000);


//de pagina saludo al index
const siguiente = document.getElementById('boton-next-instrucc');
siguiente.addEventListener('click', () => {
  window.location.href ="index.html";
});

