import { findAllChamados,findChamadoById } from '../services/getChamadoServices.js';
import { Chamado } from '../entities/chamado.js'
import { createNewChamado } from '../services/createChamadoServices.js';


export function GetChamados(res){
    const chamados = findAllChamados();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({chamados}))
    return;
};

export function GetChamado(req, res){
    try {
        const id = req.url.split('/').pop();
        const chamado = findChamadoById(id);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ chamado }));
    } catch (error) {
        SendError(res, error);
    }
};

export function CreateChamado(req,res){
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
      try{
        const data = JSON.parse(body);
        const newChamado = new Chamado(null,data.solicitante,data.descricao,data.prioridade);
        createNewChamado(newChamado);
        res.writeHead(201,{'Content-type': 'application/json' });
        res.end(JSON.stringify({status: 'created', data: newChamado}));
      }catch(error){
        SendError(res,error)
      }
    });
    return;
}

function SendError(res,error){
    const statuscode = error.statusCode || 500;
    const message = error.message || 'Erro interno do sistema';
    res.writeHead(statuscode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({error: message}));
}