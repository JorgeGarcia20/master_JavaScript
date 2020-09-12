'use strict'
//Funciones anonimas
//Es una funcion que no tiene nombre

function sumame(x, y, suma_muestra, suma_por_dos) {
  var suma = x + y;
  suma_muestra(suma);
  suma_por_dos(suma);

  return suma;

}
/*
sumame(5, 7, function (dato) {
  console.log('La suma es: ' + dato);
},
  function (dato) {
    console.log('La suma por dos es: ' + (dato * 2));
  }
)
*/
//Funcion con flecha
/**
 * podemos usar una fleche en lugar de la palabra function
 * si la funcion solo recive un parametro podemos omitir los parentesis
 */
sumame(5, 7, dato => {
  console.log('La suma es: ' + dato);
},
  dato => {
    console.log('La suma por dos es: ' + (dato * 2));
  }
)