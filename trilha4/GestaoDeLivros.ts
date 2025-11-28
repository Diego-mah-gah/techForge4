interface Produto {
    id: number;
    nome: string;
    preco: number;
}

class ItemLoja implements Produto {
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}

interface Documento {
    titulo: string;
    conteudo: string;
}

class Texto implements Documento {
    titulo: string;
    conteudo: string;

    constructor(titulo: string, conteudo: string) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    exibir(): string {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}

interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    produtos: ProdutoLoja[];

    constructor(produtos?: ProdutoLoja[]) {
        this.produtos = produtos ?? [
            { codigo: 1, nome: "Produto 1" },
            { codigo: 2, nome: "Produto 2" },
            { codigo: 3, nome: "Produto 3" },
        ];
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(p => p.codigo === codigo);
    }
}

interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    livros: Livro[];

    constructor(livros?: Livro[]) {
        this.livros = livros ?? [
            { titulo: "Livro 1", autor: "Autor 1", disponivel: true },
            { titulo: "Livro 2", autor: "Autor 2", disponivel: false },
            { titulo: "Livro 3", autor: "Autor 3", disponivel: true },
            { titulo: "Livro 4", autor: "Autor 4", disponivel: true },
        ];
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(l => l.disponivel);
    }
}

interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    livros: LivroBiblioteca[];

    constructor(livros?: LivroBiblioteca[]) {
        this.livros = livros ?? [
            { titulo: "Livro A", autor: "Autor X", genero: "Ficção", disponivel: true },
            { titulo: "Livro B", autor: "Autor Y", genero: "Não-Ficção", disponivel: false },
            { titulo: "Livro C", autor: "Autor X", genero: "Ficção", disponivel: true },
            { titulo: "Livro D", autor: "Autor Z", genero: "Fantasia", disponivel: true },
        ];
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(l => l.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(l => l.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(l => l.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const texto = new Texto("Meu Texto", "Este é o conteúdo do meu texto.");
console.log(texto.exibir());

const item = new ItemLoja(1, "Item 1", 99.99);
console.log("Item Loja:", item);

const loja = new Loja();
console.log("Buscar Produto Código 2:", loja.buscarProdutoPorCodigo(2));

const biblioteca = new Biblioteca();
console.log("Livros Disponíveis na Biblioteca:", biblioteca.buscarLivrosDisponiveis());

const bibliotecaGestao = new BibliotecaGestao();
console.log("Livros de Ficção:", bibliotecaGestao.filtrarPorGenero("Ficção"));
console.log("Livros do Autor X:", bibliotecaGestao.buscarPorAutor("Autor X"));
console.log("Livros Disponíveis Ordenados:", bibliotecaGestao.obterLivrosDisponiveisOrdenados());
