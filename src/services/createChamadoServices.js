import { AppError, ValidationError } from "../apiErrors.js";
import { createChamado } from "../repository/chamadoRepository.js";
import { CreateChamadoValidator } from "./createChamadoValidator.js";

export function createNewChamado(chamado){
    if(CreateChamadoValidator.Validate(chamado)){
        try {
            return createChamado(chamado);
        }catch(error){
            throw new AppError("Erro interno do sistema");
        }
    }else{
            throw new ValidationError("Corpo da requisição inválida.");
    }
}