import {chamados} from'../data/chamadosDb.js'

export function getAllChamados() {
    return chamados;
}

export function getChamadoById(id) {
    return chamados.find(chamado => chamado.id === Number(id));
}

export function createChamado(chamado) {
    const newChamado = {
        id: chamados.length + 1,
        solicitante: chamado.solicitante,
        descricao: chamado.descricao,
        prioridade: chamado.prioridade
    };
    chamados.push(newChamado);
    return newChamado;
}