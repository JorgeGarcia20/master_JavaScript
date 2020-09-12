'use strict'
//variables globales

function saludo(texto) {
  var variable1 = 'soy una variable dentro de una funcion y no puedo ser invocada fuera de la funcion.';
  console.log(variable1);
  console.log(variable2);
  console.log('Para convertir un dato numerico a un texto usamos la funcion toString');
  console.log(numero.toString());

}

var variable2 = 'Soy una variable global y puedo ser llamada en cualquier parte del codigo.';
var numero = 12;

saludo(texto);