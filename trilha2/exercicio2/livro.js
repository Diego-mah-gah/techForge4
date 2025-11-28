"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    titulo;
    autor;
    paginas;
    lido;
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }
    marcarComoLido() {
        this.lido = true;
        console.log(`O livro "${this.titulo}" foi lido.`);
    }
    obterInformacoes() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}, Lido: ${this.lido ? "Sim" : "Não"}`;
    }
}
const livro1 = new Livro("1984", "George Orwell", 328);
livro1.marcarComoLido();
console.log(livro1.obterInformacoes());
//# sourceMappingURL=livro.js.map