import Carro, {qualquerCoisa as x } from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

console.log(x)

/* --- Criar carros --- */

let carroA = new Carro('Jeep renegate', 4);
let carroB = new Carro('Veloster', 3);
let carroC = new Carro('Uno', 4);

/* --- Montar a lista do carro --- */

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Vincente De Maracá', listaDeCarros)

//console.log(concessionaria.mostrarListaDeCarros());

/* --- Comprar carro --- */

let cliente = new Pessoa ('Vini', 'Jeep renegate')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro);
    }else{

    }
})

