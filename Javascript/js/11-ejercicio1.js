'use strict'
/*
Programa que analiza dos numeros y dice cual es mayor, cual es menor
y si es el caso si son iguales.
si los numeros son negativos o simplemente no son numeros 
el programa debera de volver a pedir los numeros
*/


var numero1 = parseInt(prompt('Ingresa el primer numero: '));
var numero2 = parseInt(prompt('Ingresa el segundo numero: '));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
  numero1 = parseInt(prompt('Ingresa el primer numero: '));
  numero2 = parseInt(prompt('Ingresa el segundo numero: '));
}

if (numero1 == numero2) {
  alert('LOS NUMEROS SON IGUALES');

} else if (numero1 > numero2) {
  alert('El primer numero es mayor');

} else if (numero2 > numero2) {
  alert('El segundo numero es mayor');

} else {
  alert('Asegurate de ingresar un numero correcto');
}
