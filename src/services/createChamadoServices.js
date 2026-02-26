import { AppError, UnprocessableEntityError, ValidationError } from "../apiErrors.js";
import { createChamado } from "../repository/chamadoRepository.js";
import { CreateChamadoValidator } from "./createChamadoValidator.js";

export function createNewChamado(chamado){
    if(CreateChamadoValidator.hasValidFields(chamado) == false){
        throw new ValidationError("Campos obrigatórios ausentes ou com tipo inválido.");
    }
    if(!CreateChamadoValidator.hasValidBusinessRules(chamado)){
        throw new UnprocessableEntityError("Prioridade inválida ou descrição muito curta.");
    } 
    try {
        return createChamado(chamado);
    }catch(error){
        throw new AppError("Erro interno ao salvar o chamado.");
    }
}