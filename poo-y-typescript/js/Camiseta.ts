//interface

interface camisetaBase {
  setColor(color)
  getColor()
}

//Decorador
function estampar(logo: string) {
  return function (target) {
    target.prototype.estampacion = function (): void {
      console.log('Camiseta estampada con el logo:' + logo)
    }
  }
}

//El decorador funciona, marca error pero funciona


// clase (modelo del objeto)
@estampar('Nike sb')
class Camiseta implements camisetaBase {

  //Propiedades
  private color: string
  private modelo: string
  private marca: string
  private talla: string
  private precio: number

  //metodos (funciones o acciones del objeto)

  //metodo constructor
  constructor(color, modelo, marca, talla, precio) {
    this.color = color
    this.modelo = modelo
    this.marca = marca
    this.talla = talla
    this.precio = precio
  }

  public setColor(color) {
    this.color = color
  }

  public getColor() {
    return this.color
  }
}

//Herencia
/**
 * usando la herencia la clase sudadera hereda atributos de camiseta ademas de sus metodos
 * y tambien puede incluir los propios metodos y atributos creados 
*/
class Sudadera extends Camiseta {

  public capucha: boolean;

  setCapucha(capucha: boolean) {
    this.capucha = capucha
  }

  getCapucha(): boolean {
    return this.capucha
  }
}

var camiseta = new Camiseta('Azul', 'polo', 'adidas', 'm', 90)
console.log(camiseta)

camiseta.estampacion()

var sudadera_nike = new Sudadera('Azul', 'manga larga', 'nike', 'M', 900)
sudadera_nike.setCapucha(true)
sudadera_nike.setColor('Rojo')
console.log(sudadera_nike)

