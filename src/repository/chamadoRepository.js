import {chamados} from'../data/chamadosDb.js'
import {Chamado} from '../entities/chamado.js'

export function getAllChamados() {
    return chamados;
}

export function getChamadoById(id) {
    return chamados.find(chamado => chamado.id === Number(id));
}

export function createChamado(chamado) {
    const newChamado = new Chamado( 
        chamados.length + 1,
        chamado.solicitante,
        chamado.descricao,
        chamado.prioridade
    );
    chamados.push(newChamado);
    return newChamado;
}