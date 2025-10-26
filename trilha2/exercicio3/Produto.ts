class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public calcularValorTotalEmEstoque(): number {
        return this.preco * this.quantidade;
    }

    public getNome(): string {
        return this.nome;
    }

    public getPreco(): number {
        return this.preco;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }
}

const produto1 = new Produto("PS5", 3500.00, 10);
const produto2 = new Produto("Mouse Pad", 50.00, 50);

console.log(`Produto: ${produto1.getNome()}`);
console.log(`Preço Unitário: R$ ${produto1.getPreco().toFixed(2)}`);
console.log(`Quantidade em Estoque: ${produto1.getQuantidade()}`);
console.log(`Valor Total em Estoque: R$ ${produto1.calcularValorTotalEmEstoque().toFixed(2)}`);

console.log(`Produto: ${produto2.getNome()}`);
console.log(`Preço Unitário: R$ ${produto2.getPreco().toFixed(2)}`);
console.log(`Quantidade em Estoque: ${produto2.getQuantidade()}`);
console.log(`Valor Total em Estoque: R$ ${produto2.calcularValorTotalEmEstoque().toFixed(2)}`);
