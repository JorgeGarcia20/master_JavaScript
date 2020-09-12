'use strict'
//BUCLE WHILE
var year = 2020;
console.log('BUCLE WHILE EN INCREMENTO');
while (year <= 2060) {
  console.log('Estamos en el año: ' + year)
  year++;
  if (year == 2030) {
    break;//detenemos el bucle
  }
}
/*
console.log('BUCLE WHILE EN DECREMENTO');
while (year <= 1990) {
  console.log('Estamos en el año: ' + year)
  year--;
}
*/


//En el bucle do while primero se ejecuta una accion y despues se evalua la condición
var years = 20;
do {
  alert('Se ejecutara hasta que sea 25')
  years++;
} while (years <= 25);
