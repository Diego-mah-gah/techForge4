class Animal {
    nome : string;

    constructor(nome: string) {
        this.nome = nome;
    }
    energia: number = 0;

    comer() : void {
        this.energia += 10;
        console.log(`O animal ${this.nome} comeu e ganhou mais ${this.energia} de energia`);
        
    }
    statusEnergia(): string {
        return `${this.nome} possui ${this.energia} de energia.`;
    }
}

class Leao extends Animal {
    nome: string;

    constructor(nome: string) {
        super(nome);
        this.nome = nome;
    }
}

class Passaro extends Animal {
    nome: string;
    constructor(nome: string) {
        super(nome);
        this.nome = nome;
    }
}

const leao = new Leao('Simba');
leao.comer();
console.log(leao.statusEnergia());
const passaro = new Passaro('Piu-Piu');
passaro.comer();
console.log(passaro.statusEnergia());