export class CreateChamadoValidator{
    static Validate(chamado){  
      this.IsValidSocilitante(chamado.solicitante);
      this.IsValidDescription(chamado.descricao)
      this.IsValidPriority(chamado.prioridade)
    };
  IsValidSocilitante(solicitante){
    if (!solicitante || typeof solicitante !== 'string') {
        return false;
    }
    return true;
  }
  IsValidDescription(description){
    if (!description || typeof description !== 'string') {
        return false;
    };
    return true;
  }
  IsValidPriority(priority){
    if (!priority || typeof priority !== 'string') {
        return false;
    };
    return true;
  };
};
