import {protocols} from'../data/protocolDb.js'

export function getAllProtocols() {
    return protocols;
}

export function getProtocolById(id) {
    return protocols.find(protocol => protocol.id === Number(id));
}

export function createProtocol(protocol) {
    const newProtocol = {
        id: protocols.length + 1,
        nome: protocol.name,
        tipo: protocol.tipo,
        data: new Date()
    };
    protocols.push(newProtocol);
    return newProtocol;
}