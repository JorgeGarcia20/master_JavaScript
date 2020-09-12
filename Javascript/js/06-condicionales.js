//CONDICIONAL IF
var edad = 79;
var nombre = 'Jorge';

if (edad > 18) {
  console.log(nombre + ' ya eres mayor de edad');
  if (edad <= 33) {
    console.log(nombre + ' aun eres un milenial');

  } else if (edad >= 70) {
    console.log(nombre + ' tu ya eres un anciano');
  }
} else {
  console.log(nombre + ' aun no eres mayor de edad');
}

/*Operadores relacionales
mayor que >
menor que <
mayor o igual que >=
menor o igual que <=
identico ===
igual ==
diferente !=
*/

//OPERADORES LOGICOS
var year = 2020;

//negacion
if (year != 2018) {
  console.log('Este año no es 2018');
}

//AND
if (year > 2000 && year < 2021) {
  console.log('Estamos en la era actual');
} else {
  console.log('Estamos en la era postmoderna');
}

//OR
if (year == 2018 || (year >= 2018 && year == 2028)) {
  console.log('El año acaba en 8');
} else {
  console.log('Año no registrado')
}
