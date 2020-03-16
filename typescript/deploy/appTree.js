"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importStar(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
console.log(Carro_1.qualquerCoisa);
/* --- Criar carros --- */
var carroA = new Carro_1.default('Jeep renegate', 4);
var carroB = new Carro_1.default('Veloster', 3);
var carroC = new Carro_1.default('Uno', 4);
/* --- Montar a lista do carro --- */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av Vincente De Maracá', listaDeCarros);
//console.log(concessionaria.mostrarListaDeCarros());
/* --- Comprar carro --- */
var cliente = new Pessoa_1.default('Vini', 'Jeep renegate');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
    else {
    }
});
