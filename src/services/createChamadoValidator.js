export class CreateChamadoValidator{
    static Validate(chamado){  
      return (
        this.IsValidSocilitante(chamado.solicitante) &&
        this.IsValidDescription(chamado.descricao) &&
        this.IsValidPriority(chamado.prioridade));
    };
  static IsValidSocilitante(solicitante){
    if (!solicitante || typeof solicitante !== 'string') {
        return false;
    }
    return true;
  }
  static IsValidDescription(description){
    if (!description || typeof description !== 'string') {
        return false;
    };
    return true;
  }
  static IsValidPriority(priority){
    if (!priority || typeof priority !== 'string') {
        return false;
    };
    return true;
  };
};
