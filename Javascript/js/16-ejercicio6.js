'use strict'
/*
Programa que muestra si un numero es par o no
si el dato ingresado no es un numero volver a pedir el dato
*/

var numero = parseInt(prompt('Ingresa un numero: '));

while (isNaN(numero)) {
  var numero = parseInt(prompt('Ingresa un numero: '));
}

if (numero % 2 == 0) {
  console.log('El numero ' + numero + ' es par');
} else {
  console.log('El numero ' + numero + ' es impar');
}
