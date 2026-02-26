export class CreateProtocolValidator{
    isValid(_protocol) {
        if (_protocol.nome == "" || _protocol.nome == null || typeof _protocol.nome !== 'string') {
            return false;
        }
        if(_protocol.data > Date.now()){
            return false;
        }
        if(!_protocol.tipo || typeof _protocol.tipo !== 'string'){
            return false;
        }
        return true;
    }
}
