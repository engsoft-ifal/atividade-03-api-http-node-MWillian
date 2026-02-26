export class CreateChamadoValidator{
    static hasValidFields(chamado){  
      return (
        chamado.solicitante && typeof chamado.solicitante === 'string' &&
        chamado.descricao && typeof chamado.descricao === 'string' &&
        chamado.prioridade && typeof chamado.prioridade === 'string'
      );
    };
    static hasValidBusinessRules(chamado){
      const prioridadesPermitidas = ['Alta','Média','Baixa'];
      const prioridadeValida = prioridadesPermitidas.includes(chamado.prioridade);
      const descricaoLonga = chamado.descricao.length >= 10;
      return prioridadeValida && descricaoLonga;
    }
};
