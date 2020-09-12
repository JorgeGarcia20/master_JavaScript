//exports & imports
//import { Camiseta } from './Camiseta.js';
var Main = /** @class */ (function () {
    function Main() {
        console.log('Aplicacion JS cargada');
    }
    Main.prototype.getCamiseta = function () {
        return new Camiseta('Rojo', 'manga corta', 'adidas', 'M', 700);
    };
    return Main;
}());
var main = new Main();
