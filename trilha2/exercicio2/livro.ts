class Livro {  
    private titulo: string;
    private autor: string;
    private paginas: number;
    private lido: boolean;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }

    marcarComoLido(): void {
        this.lido = true;
        console.log(`O livro "${this.titulo}" foi lido.`);
    }

    obterInformacoes(): string {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}, Lido: ${this.lido ? "Sim" : "Não"}`;
    }
}

const livro1 = new Livro("1984", "George Orwell", 328);
livro1.marcarComoLido();
console.log(livro1.obterInformacoes());
