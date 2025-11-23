class Veiculo {
    public modelo: string;
    public cor: string;
    public ano: number;
    constructor(modelo: string, cor: string, ano: number) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }

    public moverCarro(): void {
        console.log(`O veículo ${this.modelo}, com cor ${this.cor} está se movendo.`);
    }

    public moverBicicleta(): void {
        console.log(`A bicicleta ${this.modelo}, com cor ${this.cor} está se movendo.`);
    }
    
}
class Carro extends Veiculo {
    public numeroDePortas: number;

    constructor(modelo: string, cor: string, ano: number, numeroDePortas: number) {
        super(modelo, cor, ano);
        this.numeroDePortas = numeroDePortas;
    }
}

class Bicicleta extends Veiculo {
    public tipo: string;
 
    constructor(modelo: string, cor: string, ano: number, tipo: string) {
        super(modelo, cor, ano);
        this.tipo = tipo;
    }
}

const carro1 = new Carro("Toyota Corolla", "Prata", 2020, 4);
carro1.moverCarro();
const bicicleta1 = new Bicicleta("Caloi MTB", "Vermelha", 2021, "Mountain Bike");
bicicleta1.moverBicicleta();