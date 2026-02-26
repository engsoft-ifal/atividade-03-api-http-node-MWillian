import { AppError, ValidationError } from "../apiErrors.js";
import { createChamado } from "../repository/chamadoRepository.js";
import { CreateChamadoValidator } from "./createChamadoValidator.js";

export function createNewChamado(chamado){
    const validator = new CreateChamadoValidator();
    if(validator.Validate(chamado)){
        try {
            createChamado(chamado)
        }catch(error){
            throw new AppError("Erro interno do sistema");
        }
    }else{
            throw new ValidationError("Corpo da requisição inválida.");
    }
}