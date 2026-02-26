export class CreateChamadoValidator{
    Validate(chamado){  
      IsValidSocilitante(chamado.solicitante);
      IsValidDescription(chamado.descricao)
      IsValidPriority(chamado.prioridade)
    }
  IsValidSocilitante(solicitante){
    if (!solicitante || typeof solicitante !== 'string') {
        return false;
    }
  }
  IsValidDescription(description){
    if (!description || typeof description !== 'string') {
        return false;
    }
  }
  IsValidPriority(priority){
    if (!priority || typeof priority !== 'string') {
        return false;
    }
  }
}
