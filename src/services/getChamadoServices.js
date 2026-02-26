import { NotFoundError, ValidationError } from '../apiErrors.js';
import { getAllChamados } from '../repository/chamadoRepository.js'
import { getChamadoById } from '../repository/chamadoRepository.js'
import { GetChamadoValidator } from "./getChamadoValidator.js"

export function findAllChamados() {
    return getAllChamados();
}

export function findChamadoById(id) {
    const validator = new GetChamadoValidator();
    if (validator.isValidId(id)) {
        const chamado = getChamadoById(id)
        if (!chamado) {
            throw new NotFoundError('Chamado não encontrado');
        }
        return chamado;
    }
    throw new ValidationError('Corpo da requisição inválida.');
}