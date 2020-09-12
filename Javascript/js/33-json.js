'use strict'

//JSON

//Declaracion de un objeto
var pelicula = {
  nombre: "Ready player one",
  year: 2019,
  categoria: "Accion"
};

//Declaracion de un arreglo de objetos
var peliculas = [
  { nombre: "Sing", year: 2017, categoria: "Animacion" },
  { nombre: "Zootopia", year: 2017, categoria: "Animacion" },
  { nombre: "Endless love", year: 2016, categoria: "Romance" },
  pelicula
];

//Recorremos el arreglo
var box = document.querySelector("#box");
for (var i in peliculas) {
  var p = document.createElement("p");
  p.append(peliculas[i].nombre + " - " + peliculas[i].categoria);
  box.append(p);
}
console.log(peliculas);