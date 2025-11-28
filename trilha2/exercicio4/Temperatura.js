"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Temperatura {
    valorCelsius;
    constructor(valorCelsius) {
        this.valorCelsius = valorCelsius;
    }
    getCelsius() {
        return this.valorCelsius;
    }
    /**
     * Fórmula: F = C * 9/5 + 32
     */
    paraFahrenheit() {
        return (this.valorCelsius * 9 / 5) + 32;
    }
    /**
     * Fórmula: K = C + 273.15
     */
    paraKelvin() {
        return this.valorCelsius + 273.15;
    }
}
const temperaturaAgua = new Temperatura(100);
console.log(`Temperatura em Celsius: ${temperaturaAgua.getCelsius()} °C`);
console.log(`Convertido para Fahrenheit: ${temperaturaAgua.paraFahrenheit()} °F`); // Saída: 212 °F
console.log(`Convertido para Kelvin: ${temperaturaAgua.paraKelvin()} K`); // Saída: 373.15 K
const zeroAbsoluto = new Temperatura(-273.15);
console.log(`Temperatura em Celsius: ${zeroAbsoluto.getCelsius()} °C`);
console.log(`Convertido para Fahrenheit: ${zeroAbsoluto.paraFahrenheit().toFixed(2)} °F`); // Saída: -459.67 °F
console.log(`Convertido para Kelvin: ${zeroAbsoluto.paraKelvin().toFixed(2)} K`); // Saída: 0.00 K
//# sourceMappingURL=Temperatura.js.map