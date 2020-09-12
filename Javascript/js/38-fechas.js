'use strict'

var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth() + 1;//el mes lo muestra iniciando de cero asi que si le sumamos uno mostrara la fecha correcta
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();
var milisegundos = fecha.getMilliseconds();

var details = `
  El año es: ${ year}
  El mes es: ${mes}
  El dia es: ${dia}
  La hora es: ${hora}
  Los minutos son: ${minutos}
  Los segundos son: ${segundos}
  Los milisegundos son: ${milisegundos}

`;

var pi = Math.PI;
var random = Math.random();

console.log('El valor de pi es : ' + pi);
console.log('Numero aleatorio: ' + random);