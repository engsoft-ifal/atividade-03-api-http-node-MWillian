export class Chamado {
    id;
    solicitante;
    descricao;
    prioridade;
    constructor(id, solicitante, descricao, prioridade) {
        this.id = id;
        this.solicitante = solicitante;
        this.descricao = descricao;
        this.prioridade = prioridade;
    }
}