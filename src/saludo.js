//crear la funcion llamada transicion
//seleccionar el div dialogo1 x su id y decirle que se debe ocultar con el none
//despues llamar al otro div dialogo2 x su id y decirle que debe mostrarse en pantalla
//todo esto ocurrira dentro de 5segundos
//PANTALLA PC
function transicion() {
  document.getElementById("dialogo1").style.display="none";
  document.getElementById("dialogo2").style.display="flex";
}
setTimeout(transicion, 5000);


//PANTALLA CEL
function transicionCel(){
  document.getElementById("dialogo3").style.display="none";
  document.getElementById("instrucc3").style.display="flex";
}
setTimeout(transicionCel, 5000);


//PANTALLA TABLET
function transicionTablet(){
  document.getElementById("dialogo4").style.display="none";
  document.getElementById("instrucc4").style.display="flex";
}
setTimeout(transicionTablet, 5000);


//de pagina saludo al index
const siguiente = document.getElementById('boton-next-instrucc');
siguiente.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href ="main.html";
});
