export class GetChamadoValidator{
  static isValidId(id){
    if (!id || isNaN(id) || id <= 0) {
            return false;
      }
          return true
  }
}