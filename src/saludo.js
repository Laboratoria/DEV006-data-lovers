//crear la funcion llamada transicion
//seleccionar el div dialogo1 x su id y decirle que se debe ocultar con el none
//despues llamar al otro div dialogo2 x su id y decirle que debe mostrarse en pantalla
//todo esto ocurrira dentro de 3segundos
//PANTALLA PC
function transicion() {
  document.getElementById("dialogo1").style.display="none";
  document.getElementById("dialogo2").style.display="flex";
}
setTimeout(transicion, 4000);


//PANTALLA CEL
function transicionCel(){
  document.getElementById("dialogo3").style.display="none";
  document.getElementById("intrucc3").style.display="flex";
}
setTimeout(transicionCel, 6000);


//PANTALLA TABLET
function transicionTablet(){
  document.getElementById("dialogo4").style.display="none";
  document.getElementById("intrucc4").style.display="flex";
}
setTimeout(transicionTablet, 5000);


//de pagina saludo al index
const siguiente = document.getElementById('boton-next-instrucc');
siguiente.addEventListener('click', () => {
  window.location.href ="main.html";
});
