'use strict'

//LocalStorage
//consultar si el navegador es compatible con localstorage

if (typeof (Storage) !== 'undefined') {
  console.log("LocalStorage compatible con el navegador");
} else {
  console.log("LocalStorage no es compatible con el navegador");
}

//Guardar datos
localStorage.setItem('titulo', 'Curso de JS, Uso de LocalStoage');

//Recuperar elemento
document.querySelector("#box").innerHTML = localStorage.getItem('titulo');

//Guardar objetos
var usuario = {
  nombre: "Usuario 1",
  email: "usuario1@gmail.com",
  telefono: 627152618
}
//convertir un objeto a string
localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar el objeto
var userjs = JSON.parse(localStorage.getItem('usuario'));//se transforma de strin a objeto

console.log(userjs);
document.querySelector("#datos").append(userjs.nombre + " - " + userjs.email);

//localStorage.clear();




