'use strict'
/**Formulario para agregar peliculas
 * El nombre de la pelicula debe guardarse en el localstorage
 * los nombres de las peliculas agregadas deben mostrarse en la pagina
 * borrar pelicula poniendo el titulo de esta.
 */
var form_agregar = document.querySelector("#form-pelicula");
var form_eliminar = document.querySelector("#form-borrar-pelicula");



var peliculas = document.querySelector("#peliculas");

form_agregar.addEventListener("submit", function () {
  //console.log("Evento submit capturado");
  var titulo_agregar = document.querySelector("#titulo-agregar").value;
  if (titulo_agregar.length >= 1) {
    localStorage.setItem(titulo_agregar, titulo_agregar);
  }

});

for (var i in localStorage) {
  if (typeof localStorage[i] == 'string') {
    var li = document.createElement("li");
    li.append(localStorage[i]);
    peliculas.append(li);
  }
}

form_eliminar.addEventListener("submit", function () {
  var titulo_borrar = document.querySelector("#titulo-borrar").value;
  if (titulo_borrar.length >= 1) {
    localStorage.removeItem(titulo_borrar);
  }

});
