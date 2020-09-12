//exports & imports
//import { Camiseta } from './Camiseta.js';

class Main {
  constructor() {
    console.log('Aplicacion JS cargada')
  }


  getCamiseta() {
    return new Camiseta('Rojo', 'manga corta', 'adidas', 'M', 700)
  }
}

var main = new Main()