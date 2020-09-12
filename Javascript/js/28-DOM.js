'use strict'

// DOM Document Object Model

function cambiarColor(color) {
  box.style.background = color;
}
//Conseguir elemtos por id
//var box = document.getElementById("mybox");
var box = document.querySelector("#mybox");
box.innerHTML = "ESTO ESTA MODIFICADO DESDE JS";
box.style.background = 'green';
box.style.padding = '20px';
box.style.color = 'white';

//Conseguir elemtos por etiqueta
var allDivs = document.getElementsByTagName("div");
var seccion = document.querySelector("#mySection");
var hr = document.createElement("hr");

var elemto;
for (elemto in allDivs) {
  if (typeof allDivs[elemto].textContent == 'string') {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(allDivs[elemto].textContent);
    parrafo.appendChild(texto);
    seccion.append(parrafo);
  }
}
seccion.append(hr);
//conseguir elemtos por clase
var redDiv = document.getElementsByClassName('red');
var yellowDiv = document.getElementsByClassName('yellow')
yellowDiv[0].style.background = 'yellow';
var div;
for (div in redDiv) {
  if (redDiv[div].className == 'red') {
    redDiv[div].style.background = 'red';
  }
}
//console.log(redDiv);
//console.log(yellowDiv);

//querySelector
//query selector no crea un arreglo 
var id = document.querySelector('#myBox');
console.log(id);

var clase = document.querySelector('.red');
console.log(clase);

var etiqueta = document.querySelector('div');
console.log(etiqueta);
