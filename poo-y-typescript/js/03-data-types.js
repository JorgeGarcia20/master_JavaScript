//TIPOS DE DATOS EN TYPESCRIPT
//string
var candena = "i'm a string";
//number
var numero = 20;
var flotante = 90.33;
//boolean 
var verdadero = true;
var falso = false;
//any(cualquier tipo de dato)
var cuelquiera = 'hola';
//Arrays
var lenguajes = ['Python', 'JavaScript', 'TypeScript'];
var years = [12, 'trece', 14, 'quince'];
console.log(candena, numero, flotante, verdadero, falso, cuelquiera, lenguajes, years);
//podemos asignar dos tipos de datos a una variable 
var dato = 'soy un string';
console.log('Esta es la variable dato con un valor string-> ' + dato);
dato = 70;
console.log('soy la variale dato pero ahora con un valor number ' + dato);
var variable_personalizada = 90;
console.log('soy una variable personalizada con el valor: ' + variable_personalizada);
variable_personalizada = 'hola';
console.log('soy la misma variable personalizada pero con el valor: ' + variable_personalizada);
// let vs var
// var funciona como una variable global
// let funciona como una variable a nivel de instruccion
var numero1 = 10;
var numero2 = 30;
if (numero1 == 10) {
    var numero1_1 = 80;
    var numero2 = 20;
    console.log(numero1_1, numero2);
    //dentro de la condicion if la variable let numero1 muestra el dato asignado
}
console.log(numero1, numero2);
//fuera de la instruccion la variable solo muestra el valor signado al princio
