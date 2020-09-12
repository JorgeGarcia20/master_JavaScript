'use strict'
//Parametros REST y SPREAD

function listandoFrutas(fruta1, fruta2, ...fruta_n) {
  /*
  con los tres pustos indicamos un parametro REST y lo devolvera como un arreglo
  los parametros ingresados despues de los por defecto se guardaran  en un arreglo
  */
  console.log('Fruta 1: ' + fruta1);
  console.log('Fruta 2: ' + fruta2);
  console.log(fruta_n);
}

listandoFrutas('Manzana', 'Pera', 'Banana', 'Mango', 'Coco');

//Parametro SPREAD
/*
podemos agregar el contenido de un arreglo a un parametro de una funcion
este parametro seguira siendo un array
*/
var frutas = ['Naranja', 'Manzana'];
listandoFrutas(...frutas, 'Sandia', 'Pera', 'Melon', 'Coco')