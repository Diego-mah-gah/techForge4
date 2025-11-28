"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pagamento {
    valor;
    data;
    constructor(valor, data) {
        this.valor = valor;
        this.data = data;
    }
    getValor() {
        return this.valor;
    }
    processar() {
        console.log(`Processando o pagamento no valor de R$${this.valor}. Data do pagamento: ${this.data.toDateString()}`);
    }
}
class PagamentoCartao extends Pagamento {
    numeroCartao;
    nomeTitular;
    validade;
    constructor(valor, data, numeroCartao, nomeTitular, validade) {
        super(valor, data);
        this.numeroCartao = numeroCartao;
        this.nomeTitular = nomeTitular;
        this.validade = validade;
    }
    processar() {
        super.processar();
        console.log(`Processando pagamento com cartão número ${this.numeroCartao}. Titular: ${this.nomeTitular}. Validade ${this.validade}`);
    }
}
class PagamentoBoleto extends Pagamento {
    codigoBoleto;
    constructor(valor, data, codigoBoleto) {
        super(valor, data);
        this.codigoBoleto = codigoBoleto;
    }
    processar() {
        super.processar();
        console.log(`Processando pagamento com boleto código ${this.codigoBoleto}`);
    }
}
const pagamentoCartao = new PagamentoCartao(150.00, new Date(), '1234 5678 9012 3456', 'Gustavo Henrique', '01/13');
pagamentoCartao.processar();
const pagamentoBoleto = new PagamentoBoleto(200.00, new Date(), '12345677890');
pagamentoBoleto.processar();
//# sourceMappingURL=Pagamento.js.map