//TIPOS DE DATOS EN TYPESCRIPT

//string
let candena: string = "i'm a string"

//number
let numero: number = 20
let flotante: number = 90.33

//boolean 
let verdadero: boolean = true
let falso: boolean = false

//any(cualquier tipo de dato)
let cuelquiera: any = 'hola'

//Arrays
var lenguajes: Array<string> = ['Python', 'JavaScript', 'TypeScript']
var years: any[] = [12, 'trece', 14, 'quince']

console.log(candena, numero, flotante, verdadero, falso, cuelquiera, lenguajes, years)

//podemos asignar dos tipos de datos a una variable 

let dato: string | number = 'soy un string'
console.log('Esta es la variable dato con un valor string-> ' + dato)

dato = 70;
console.log('soy la variale dato pero ahora con un valor number ' + dato)

//podemos crear tipos de datos personalizados

type alfanumerico = string | number

var variable_personalizada: alfanumerico = 90
console.log('soy una variable personalizada con el valor: ' + variable_personalizada)

variable_personalizada = 'hola'
console.log('soy la misma variable personalizada pero con el valor: ' + variable_personalizada)


// let vs var
// var funciona como una variable global
// let funciona como una variable a nivel de instruccion

var numero1 = 10
var numero2 = 30

if (numero1 == 10) {
    let numero1 = 80
    var numero2 = 20

    console.log(numero1, numero2)

    //dentro de la condicion if la variable let numero1 muestra el dato asignado
}

console.log(numero1, numero2)
//fuera de la instruccion la variable solo muestra el valor signado al princio