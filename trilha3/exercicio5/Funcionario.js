"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    nome;
    salario;
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    calcularSalarioComBonus() {
        return this.salario * 0.1;
    }
}
class Gerente extends Funcionario {
    calcularSalarioComBonus() {
        return this.salario * 0.2;
    }
}
class Operario extends Funcionario {
    calcularSalarioComBonus() {
        return this.salario * 0.05;
    }
}
const gerente = new Gerente("Gean", 5000);
const operario = new Operario("Arthur", 3000);
console.log(`Bonus do Gerente ${gerente.nome}: R$ ${gerente.calcularSalarioComBonus()}`);
console.log(`Bonus do Operario ${operario.nome}: R$ ${operario.calcularSalarioComBonus()}`);
//# sourceMappingURL=Funcionario.js.map