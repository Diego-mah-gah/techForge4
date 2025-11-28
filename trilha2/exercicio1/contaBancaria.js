"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBancaria {
    saldo;
    titular;
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        }
        else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        }
        else {
            console.log("Saldo insuficiente ou valor inválido para saque.");
        }
    }
    consultarSaldo() {
        return this.saldo;
    }
}
const conta = new ContaBancaria("Pedro Augusto", 1000);
const titular = "Pedro Augusto";
console.log("Olá, " + titular + "!");
conta.depositar(500);
conta.sacar(200);
console.log(`Saldo atual: R$${conta.consultarSaldo()}`);
//# sourceMappingURL=contaBancaria.js.map