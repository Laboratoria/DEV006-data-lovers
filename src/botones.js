//llamando a los input del login por su ID
const user = document.getElementById('user');
const password = document.getElementById('password');
const passwordIncorrect = document.getElementById('wrongPassword');
//ventanas y vistas
const ventanalogin = document.getElementById('login');
const vistaError = document.getElementById('vista-error');

//boton ingresar para abrir en la pag saludo
const btnEnter = document.getElementById('btn-enter');
btnEnter.addEventListener('click', () => {
  window.location.href = "saludo.html";
});

//boton ingresar user y password
let prueba = 3;
btnEnter.addEventListener('click', () => {
  if (password.value === "" && user.value === "") {
    passwordIncorrect.innerHTML = '<strong>Please, enter your username and password.</strong>';
  } else if (password.value === "") {
    passwordIncorrect.innerHTML = '<strong>Please, enter your password.</strong>';
    document.getElementById('user').value = '';
  } else if (user.value === "") {
    passwordIncorrect.innerHTML = '<strong>Please, enter your username.</strong>';
    document.getElementById('password').value = '';
  } else if (user.value === 'Laboratoria' && password.value === 'Dev006') {
    ventanalogin.classList.add('hide');
  } else {
    if (prueba === 0) {
      ventanalogin.classList.add('hide');
      vistaError.classList.remove('hide');
    } else {
      // eslint-disable-next-line no-undef
      wrongPassword.innerHTML = '<strong>Incorrect data, you have' + prueba + 'attempts.</strong>';
      user.value = '';
      password.value = '';
      prueba--;
    }
  }
});