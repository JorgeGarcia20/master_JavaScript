'use strict'
window.addEventListener('load', function () {
  console.log("Evento load capturado");

  var formulario = document.querySelector("#formulario");
  //var boton = document.querySelector("#boton");
  var dashed = document.querySelector(".dashed");
  dashed.style.display = 'none';

  formulario.addEventListener('submit', function () {
    // console.log("Evento click capturado")
    var nombre = document.querySelector("#nombre").value;
    var apellidos = document.querySelector("#apellido").value;
    var edad = parseInt(document.querySelector("#edad").value);

    //validacion de campos
    if (nombre.trim() == null || nombre.trim().length == 0) {
      alert("El nombre no es valido");
      return false;
    }
    if (apellidos.trim() == null || apellidos.trim().length == 0) {
      alert("Los apellidos no son validos");
      return false;
    }
    if (edad == null || edad <= 0 || isNaN(edad)) {
      alert("La edad no es correcta");
      return false;
    }

    dashed.style.display = 'block';
    console.log(nombre, apellidos, edad)
    var datos = [nombre, apellidos, edad];

    var indice;
    for (indice in datos) {
      var parrafo = document.createElement("p");
      parrafo.append(datos[indice]);
      dashed.append(parrafo)
    }

  });
});

