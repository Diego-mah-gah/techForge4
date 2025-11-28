"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Agenda {
    compromissos;
    constructor() {
        this.compromissos = [];
    }
    adicionarCompromisso(compromisso) {
        this.compromissos.push(compromisso);
        console.log(`Compromisso "${compromisso}" adicionado à agenda.`);
    }
    listarCompromissos() {
        console.log("\n Lista de Compromissos: ");
        if (this.compromissos.length === 0) {
            console.log("Nenhum compromisso agendado.");
            return;
        }
        this.compromissos.forEach((compromisso, index) => {
            console.log(`${index + 1}. ${compromisso}`);
        });
        console.log("-----------------------------\n");
    }
}
const minhaAgenda = new Agenda();
minhaAgenda.adicionarCompromisso("Reunião de equipe às 10:00");
minhaAgenda.adicionarCompromisso("Consulta médica às 14:30");
minhaAgenda.adicionarCompromisso("Fazer exercícios às 18:00");
minhaAgenda.listarCompromissos();
const agendaVazia = new Agenda();
agendaVazia.listarCompromissos();
//# sourceMappingURL=Agenda.js.map