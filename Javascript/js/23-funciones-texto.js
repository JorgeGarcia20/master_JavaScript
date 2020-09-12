'use strict'

var numero = 30102;
var texto1 = 'Mi nombre es jorge';
var texto2 = 'Estoy aprendiendo JavaScript';

//convertir numeros a string
var dato1 = numero.toString();

//convertir todo el texto a mayusculas
var dato2 = texto1.toUpperCase();

//convertir todo el texto a minusculas
var dato3 = texto2.toLowerCase();

//Calcular la logitud de un 
var nombre = 'Jorge Garcia';
console.log(nombre.length);

//Concatenar
var textoTotal1 = texto1 + ' ' + texto2;
console.log(textoTotal1);

//otra forma de concatenar variables
var textoTotal2 = texto1.concat(texto2);
console.log(textoTotal2);