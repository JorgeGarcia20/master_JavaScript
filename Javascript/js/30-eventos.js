'use strict'
//EVENTOS

window.addEventListener('load', () => {

  var boton = document.querySelector("#btn");
  boton.style.padding = '10px';
  boton.style.border = '1px solid #ccc';
  function cambiarColor() {
    var bg = boton.style.background;
    if (bg == 'green') {
      boton.style.background = 'red';
    } else {
      boton.style.background = 'green';
    }
    return true;
  }

  //evento click
  boton.addEventListener('click', () => {//es necesario crear una funcion anonima y dentro llamar la funcion deseada
    cambiarColor();
  });

  //evento mouseover
  boton.addEventListener('mouseover', () => {
    boton.style.background = 'yellow';
  });

  //mouseout
  boton.addEventListener('mouseout', () => {
    boton.style.background = 'grey';
  });

  var input = document.querySelector("#campo_nombre");
  //focus
  input.addEventListener('focus', () => {
    console.log("[focus] Estas dentro del input");
  });

  //blur
  input.addEventListener('blur', () => {
    console.log("[blur] Estas fuera del input");
  });

  //keyDown
  input.addEventListener('keydown', (event) => {
    console.log("[keydown] pulsando esta tecla: ", String.fromCharCode(event.keyCode));
  });

  //keyPress
  input.addEventListener('keypress', (event) => {
    console.log("[keypress] tecla precionada: ", String.fromCharCode(event.keyCode));
  });

  //keyUp
  input.addEventListener('keyup', (event) => {
    console.log("[keyup] tecla pulsada: ", String.fromCharCode(event.keyCode));
  });

});//final del evento load



