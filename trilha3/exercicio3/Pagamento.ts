class Pagamento {
    private valor: number;
    private data: Date;

    constructor(valor: number, data: Date) {
        this.valor = valor;
        this.data = data;
    }

    public getValor(): number {
        return this.valor;
    }

    processar(): void {
        console.log(`Processando o pagamento no valor de R$${this.valor}. Data do pagamento: ${this.data.toDateString()}`);
    }    
}

class PagamentoCartao extends Pagamento {
    private numeroCartao: string;
    private nomeTitular: string;
    private validade: string;

    constructor(valor: number, data: Date, numeroCartao: string, nomeTitular: string, validade: string) {
        super(valor, data);
        this.numeroCartao = numeroCartao;
        this.nomeTitular = nomeTitular;
        this.validade = validade;
    }

    processar(): void {
        super.processar();
        console.log(`Processando pagamento com cartão número ${this.numeroCartao}. Titular: ${this.nomeTitular}. Validade ${this.validade}`);
    }
}

class PagamentoBoleto extends Pagamento {
    private codigoBoleto: string;
    constructor(valor: number, data: Date, codigoBoleto: string) {
        super(valor, data);
        this.codigoBoleto = codigoBoleto;
    }
    processar(): void {
        super.processar();
        console.log(`Processando pagamento com boleto código ${this.codigoBoleto}`);
    }
}

const pagamentoCartao = new PagamentoCartao(150.00, new Date(), '1234 5678 9012 3456', 'Gustavo Henrique', '01/13');
pagamentoCartao.processar();

const pagamentoBoleto = new PagamentoBoleto(200.00, new Date(), '12345677890');
pagamentoBoleto.processar();