'use strict'
// Diferencias entre let y var al definir una variable
// Uso de var
var numero = 20;
console.log(numero);// 20

if (true) {
  var numero = 50
  console.log(numero)// 50
}
console.log(numero)// 50

/*----------------------------------*/
// Uso de let
var texto = 'Curso de JS'
console.log(texto)// curso JS

if (true) {
  let texto = 'Python'// let tiene limitante 
  console.log(texto)//Python
}
console.log(texto)// curso JS