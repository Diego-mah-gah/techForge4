"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FiguraGeometrica {
    calcularArea() {
        return 0;
    }
}
class Circulo extends FiguraGeometrica {
    raio;
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}
class Quadrado extends FiguraGeometrica {
    lado;
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
class Triangulo extends FiguraGeometrica {
    base;
    constructor(base) {
        super();
        this.base = base;
    }
    calcularArea() {
        return (this.base * this.base) / 2;
    }
}
class novasFiguras extends FiguraGeometrica {
    figuras;
    constructor(figuras) {
        super();
        this.figuras = figuras;
    }
    calcularArea() {
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
const figuras = [new Circulo(5), new Quadrado(4), new Triangulo(3)];
console.log(`Total de novas figuras: ${figuras.length}`);
console.log(`Nomes das novas figuras: ${figuras.map(figura => figura.constructor.name).join(", ")}`);
console.log(`Área total das novas figuras: ${figuras.reduce((total, figura) => total + figura.calcularArea(), 0)}`);
//# sourceMappingURL=FiguraGeometrica.js.map