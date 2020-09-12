'use strict'
/*
Mostrar todos los numero impares que har entre dos numeros introducidos por el usuario
*/
var inicio = parseInt(prompt('Introduce el numero para iniciar'));
var final = parseInt(prompt('Introduce otro numero para finalizar'));

document.write("<h2>De " + inicio + " a " + final + " estan estos numeros impares: </h2>")
for (var i = inicio; i <= final; i++) {
  if (i % 2 != 0) {
    document.write(i + '<br>');
  }
}