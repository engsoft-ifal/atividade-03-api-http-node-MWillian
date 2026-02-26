import { AppError, ValidationError } from "../apiErrors.js";
import { createProtocol } from "../repository/protocolRepository.js";
import { CreateProtocolValidator } from "./createProtocolValidator.js";

export function createNewProtocol(protocol){
    const validator = new CreateProtocolValidator();
    if(validator.isValid(protocol)){
        try {
            createProtocol(protocol)
        }catch(error){
            throw new AppError("Erro interno do sistema");
        }
    }else{
            throw new ValidationError("Corpo da requisição inválida.");
    }
}