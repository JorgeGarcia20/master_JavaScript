'use strict'

var categoria = ['Terror', 'Accion', 'Comedia', 'Romance'];
var pelicula = ['Hallowen', 'The avengers', 'Bob Esponja', 'Lalaland'];

var cine = [categoria, pelicula];
/*
console.log(cine[0][1]);
console.log(cine[1][3]);
*/
//OPERACIONES PARA ARREGLOS

//para agregar un nuevo elemento
pelicula.push('Batman');
//eliminar el ultimo elemento del array
//pelicula.pop();

//eliminar un elemento en espesifico
var indice = pelicula.indexOf('Lalaland');
if (indice > -1) {
  pelicula.splice(indice, 1);

}
//convierte el arreglo a un string separado por comas
var pelicula_string = pelicula.join();

// convertir un string a un array
var cadena = 'texto1, texto2, texto3, texto4';
var cadena_array = cadena.split(', ');//tomara cada elemento que se separe con una coma y espacio


// ordenar el array en forma alfabetica
//pelicula.sort();
pelicula.reverse();

//console.log('Array de peliculas ordenada de manera alfabetica ' + pelicula);
console.log('Array ordenada de inversa: ' + pelicula);

