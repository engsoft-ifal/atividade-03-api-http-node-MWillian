import { AppError, NotFoundError, ValidationError } from '../apiErrors.js';
import { getAllProtocols } from '../repository/protocolRepository.js'
import { getProtocolById } from '../repository/protocolRepository.js'
import { GetProtocolValidator } from "./getProtocolValidator.js"

export function findAllProtocols() {
    return getAllProtocols();
}

export function findProtocolById(id) {
    const validator = new GetProtocolValidator();
    if (validator.isValid(id)) {
        const protocol = getProtocolById(id)
        if (!protocol) {
            throw new NotFoundError('Protocolo não encontrado');
        }
        return protocol;
    }
    throw new ValidationError('Corpo da requisição inválida.');
}