'use strict'
/* 
Hacer un programa que muestre todos los numeros entre dos numeros introducidos
por el usuario
*/
var inicio = parseInt(prompt('Introduce un numero para iniciar'));
var final = parseInt(prompt('Introduce un numero para finalizar'));

document.write("<h1>De " + inicio + " a " + final + " estan estos numeros: </h1>");
for (var i = inicio; i <= final; i++) {
  document.write(i + '<br>')
}