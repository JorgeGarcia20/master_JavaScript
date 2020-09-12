'use strict'
/*
Crear una calculadora que pida dos numeros 
si los datos ingresados no son numeros debera volverlos a pedir 
el resultado se debera imprimer en el body, en un alert y en la consola
las operaciones que debe hacer la calculadora son las cuatro operaciones basicas.
*/

var x = parseInt(prompt('Ingresa el primer numero: '));
var y = parseInt(prompt('Ingresa el segundo numero: '));

while (isNaN(x) || isNaN(y)) {
  x = parseInt(prompt('Ingresa el primer numero: '));
  y = parseInt(prompt('Ingresa el segundo numero: '));
}
var suma = x + y;
var resta = x - y;
var multiplicacion = x * y;
var divicion = x / y;
document.write('<h2>CALCULADORA</h2>');

document.write('La suma de los numeros es: ' + suma + '<br>');
document.write('La resta de los numeros es: ' + resta + '<br>');
document.write('La multiplicacion de los numeros es: ' + multiplicacion + '<br>');
document.write('La divicion de los numeros es: ' + divicion + '<br>');
document.write('<hr>');

console.log('La suma de los numeros es: ' + suma);
console.log('La resta de los numeros es: ' + resta);
console.log('La multiplicacion de los numeros es: ' + multiplicacion);
console.log('La divicion de los numeros es: ' + divicion);


alert('La suma de los numeros es: ' + suma + '\n' +
  'La resta de los numeros es: ' + resta + '\n' +
  'La multiplicacion de los numeros es: ' + multiplicacion + '\n' +
  'La divicion de los numeros es: ' + divicion);

