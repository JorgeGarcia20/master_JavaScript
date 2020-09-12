'use strict'
var nombres = ['Jorge', 'Alberto', 'Santiago', 'Carmen'];
var lenguajes = new Array('JS', 'GO', 'PYTHON', 'Java', 'Ruby', 'C#', 'C', 'C++');

/*
var elemento = parseInt(prompt('Que elemento del array quieres '));
if (elemento >= nombres.length) {
  alert('instroduce el numero correcto menor que ' + nombres.length);

} else {
  alert('El usuario seleccionado es: ' + nombres[elemento]);

}
*/
//Recorrer arrglos
document.write("<h1>Lenguajes de programacion 2020</h1>")
document.write("<lu>")
//for normal
/*for (var i = 0; i < lenguajes.length; i++) {
  document.write("<li>" + lenguajes[i] + "</li>");
}
// forEach
lenguajes.forEach((elemento, index) => {
  document.write("<li>" + index + '-' + elemento + "</li>");
});
*/
//for con in 
for (let lenguaje in lenguajes) {
  document.write("<li>" + lenguajes[lenguaje] + "</li>");
}
document.write("</ul>");

//BUSQUEDAS

var busqueda = lenguajes.find(lenguaje => lenguaje == 'PYTHON');
console.log(busqueda);
var busqueda_index = lenguajes.findIndex(lenguaje => lenguaje == 'GO');
console.log(busqueda_index);

var precios = [10, 30, 80, 129, 90];

var busqueda_precios = precios.some(precio => precio >= 90);
//true, si existe un numero mayor o igual a 90 en el arreglo devuelve un balor booleano
console.log(busqueda_precios);