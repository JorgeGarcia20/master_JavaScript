'use strict'

//FUNCIONES
/*
Una funciones es una agrupaocion reutilizable de un conjunto de instrucciones
*/

function porConsola(x, y) {
  console.log("Suma: " + (x + y));
  console.log("Resta: " + (x - y));
  console.log("Multiplicacion: " + (x * y));
  console.log("divicion: " + (x / y));
  console.log("******************************");
}

//Podemos separar una funcion en funciones mas pequeñas que ayuden a una mejor comprensión.

function porPantalla(x, y) {
  document.write("Resta: " + (x - y) + "<br>");
  document.write("Suma: " + (x + y) + "<br>");
  document.write("Multiplicacion: " + (x * y) + "<br>");
  document.write("divicion: " + (x / y) + "<br>");
  document.write("******************************" + "<br>");
}

function calculadora(x, y, estado = false) {

  if (estado == false) {
    porConsola(x, y);

  } else {
    porPantalla(x, y);
  }
  return true;
  //con el return debuelve un valor de la funcion
  //return "Hola soy una funcion, mi nombre es calculadora";
}

calculadora(90, 80);
calculadora(9, 8, true);
calculadora(900, 80, true);

/*
for (var i = 1; i <= 10; i++) {
  console.log(i);
  calculadora(i, 10);
}
*/