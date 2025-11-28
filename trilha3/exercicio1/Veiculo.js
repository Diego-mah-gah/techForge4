"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    modelo;
    cor;
    ano;
    constructor(modelo, cor, ano) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }
    moverCarro() {
        console.log(`O veículo ${this.modelo}, com cor ${this.cor} está se movendo.`);
    }
    moverBicicleta() {
        console.log(`A bicicleta ${this.modelo}, com cor ${this.cor} está se movendo.`);
    }
}
class Carro extends Veiculo {
    numeroDePortas;
    constructor(modelo, cor, ano, numeroDePortas) {
        super(modelo, cor, ano);
        this.numeroDePortas = numeroDePortas;
    }
}
class Bicicleta extends Veiculo {
    tipo;
    constructor(modelo, cor, ano, tipo) {
        super(modelo, cor, ano);
        this.tipo = tipo;
    }
}
const carro1 = new Carro("Toyota Corolla", "Prata", 2020, 4);
carro1.moverCarro();
const bicicleta1 = new Bicicleta("Caloi MTB", "Vermelha", 2021, "Mountain Bike");
bicicleta1.moverBicicleta();
//# sourceMappingURL=Veiculo.js.map