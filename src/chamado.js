export class Chamado {
    id;
    solicitante;
    descricao;
    prioridade;
    constructor(id, solicitante, descricao, prioridade) {
        this.solicitante = solicitante;
        this.descricao = descricao;
        this.prioridade = prioridade;
    }
}