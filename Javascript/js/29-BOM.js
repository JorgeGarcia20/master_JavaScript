'use strict'
//BOM browser object model

function getBom() {
  //esta funcion muestra el ancho y el largo de la ventana del explorador
  console.log(screen.width);
  console.log(screen.height);
  console.log(window.location);
}

function redirect(url) {
  window.location.href = url;
}

function abrirVentana(url) {
  //Esta funcion abre una nueva ventana con un tamaño definido.
  window.open(url, "", "width = 400, height = 300");
}

getBom();