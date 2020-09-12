'use strict'
/* 
Del numero que introdusca el usuario moestrar su tabla de multiplicar

*/

var numero = parseInt(prompt('Ingresa el numero de la tabla de multiplicar'));

while (isNaN(numero)) {
  var numero = parseInt(prompt('Ingresa el numero de la tabla de multiplicar'));
}
document.write('<h2>La tabla de multiplicar del numero ' + numero + ' es : </h2>');
for (var i = 1; i <= 10; i++) {
  var resultado = i * numero;
  document.write(i + 'X' + numero + '=' + resultado + '<br>');

}