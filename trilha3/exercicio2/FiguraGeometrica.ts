class FiguraGeometrica {

    calcularArea(): number {
        return 0;
    }

}

class Circulo extends FiguraGeometrica {
    private raio: number;
    constructor(raio: number) {
        super();
        this.raio = raio;
    }
    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

class Quadrado extends FiguraGeometrica {
    private lado: number;
    constructor(lado: number) {
        super();
        this.lado = lado;
    }
    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Triangulo extends FiguraGeometrica {
    private base: number;
    constructor(base:number){
        super();
        this.base = base;
    }
    calcularArea(): number {
        return (this.base * this.base) / 2;
    }
}

class novasFiguras extends FiguraGeometrica {
    private figuras: FiguraGeometrica[];
    constructor(figuras: FiguraGeometrica[]) {
        super();
        this.figuras = figuras;
    }
    calcularArea(): number {
        let areaTotal = 0;
        for (const figura of this.figuras) {
            areaTotal += figura.calcularArea();
        }
        return areaTotal;
    }

}

const circulo1 = new Circulo(5);
console.log(`Área do círculo: ${circulo1.calcularArea()}`);
const quadrado1 = new Quadrado(4);
console.log(`Área do quadrado: ${quadrado1.calcularArea()}`);
const triangulo1 = new Triangulo(3);
console.log(`Área do triângulo: ${triangulo1.calcularArea()}`);
const figuras: FiguraGeometrica[] = [new Circulo(5), new Quadrado(4), new Triangulo(3)];
console.log(`Total de novas figuras: ${figuras.length}`);
console.log(`Nomes das novas figuras: ${figuras.map(figura => figura.constructor.name).join(", ")}`);
console.log(`Área total das novas figuras: ${figuras.reduce((total, figura) => total + figura.calcularArea(), 0)}`);