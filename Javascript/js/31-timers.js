'use strict'

window.addEventListener('load', () => {
  //timers

  function intervalo() {
    /**
     * En esta funcion se crea un intevalo de tiempo
     * durante el intervalo la el tamaño de fuente de un h1 aumentara y disminuira
     * dependiendo el tamaño, esto hara un bucle y el tamaño de fuente estara cambiando.
     */
    var tiempo = setInterval(() => {
      var encabezado = document.querySelector("h1");

      if (encabezado.style.fontSize == "50px") {
        encabezado.style.fontSize = "30px";
      } else {
        encabezado.style.fontSize = "50px";
      }

    }, 2000);
    return tiempo;
  };

  var tiempo = intervalo();//creamos una variable con el valor de la funcion intervalo.

  var stop = document.querySelector("#btn_stop");
  stop.addEventListener('click', () => {
    alert("Has detendido el intervalo")
    clearInterval(tiempo);//con esta funcion detenemos el intervalo
  });

  var start = document.querySelector("#btn_start");
  start.addEventListener('click', () => {
    alert("Has iniciado el intervalo");
    intervalo();//llamamos de nuevo la funcion intervalo
  });
});