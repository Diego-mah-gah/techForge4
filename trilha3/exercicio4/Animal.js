"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    energia = 0;
    comer() {
        this.energia += 10;
        console.log(`O animal ${this.nome} comeu e ganhou mais ${this.energia} de energia`);
    }
    statusEnergia() {
        return `${this.nome} possui ${this.energia} de energia.`;
    }
}
class Leao extends Animal {
    nome;
    constructor(nome) {
        super(nome);
        this.nome = nome;
    }
}
class Passaro extends Animal {
    nome;
    constructor(nome) {
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
//# sourceMappingURL=Animal.js.map