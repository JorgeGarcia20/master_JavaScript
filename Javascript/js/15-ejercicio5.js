'use strict'
/*
Muestre todos los numeros divisores de un numero introducido por el usuario
*/

var numero = parseInt(prompt('Ingresa un numero'));
for (var i = 1; i <= numero; i++) {
  if (numero % i == 0) {
    console.log('Divisor: ' + i);
  }
}