'use strict'
/*
1. pida 6 numeros por pantalla y los meta en un array 
2. mostrar el array entero, todos sus elementos en el cuerpo de la pagina y en la consola
3. ordenarlo y mostrarlo
4. invertir su orden y mostrarlo
5. mostrar cuantos elementos tiene el array
6. busqueda de un valor introducido por el usuario que nos diga si se encuentra y su indice
uso de funciones
*/

//pedimos los 6 numeros
var numeros = [];

for (var i = 0; i < 5; i++) {
  numeros.push(parseInt(prompt('Inserta un numero')));
}

var mostrarArreglo = ((elementos, textoCustom = '') => {
  document.write('<h2>Contenido del array ' + textoCustom + ' </h2>')
  document.write('<lu>');
  elementos.forEach((elemento, index) => {
    document.write('<li>' + elemento + '</li>');
  });
  document.write('</lu>')
});

console.log(numeros);
//mostramos el arreglo
mostrarArreglo(numeros);

//ordenar el arreglo y mostrarlo
numeros.sort(function (a, b) { return a - b });
//esta funcion de callback hace que el arreglo se ordene de una mejor manera
mostrarArreglo(numeros, 'ordenado');
console.log(numeros);

//invertir su orden 
numeros.reverse();
mostrarArreglo(numeros, 'invertido');
console.log(numeros);

//numero de elemento del array
console.log('El arreglo tiene ' + numeros.length + ' elementos');
document.write('<h2>El arreglo tiene ' + numeros.length + ' elementos</h2>')

//Buscar un valor introducido por el usuario
var valor = prompt('Ingresa el numero que deseas buscar en el arreglo');
var busqueda = numeros.findIndex(numero_index => numero_index == valor)

if (busqueda && busqueda != -1) {
  console.log('El numero que buscas si existe en el arreglo');
  console.log('Se encuentra en la posicion ' + busqueda);
  document.write('<hr><h2>ENCONTRADO</h2>')
  document.write('<h2>Se encuentra en la posicion ' + busqueda + '</h2><hr>')
} else {
  console.log('El numero que buscas no existe en el arreglo');
}