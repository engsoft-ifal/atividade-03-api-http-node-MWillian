import http from 'http';
import { findAllProtocols } from './services/getProtocolServices.js';
import { findProtocolById } from './services/getProtocolServices.js';
import { Protocol } from './entities/protocol.js'
import { createNewProtocol } from './services/createProtocolServices.js';

const server = http.createServer((req, res) => { 

  if (req.method === 'GET' && req.url === '/health') { 
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' })); 
    return; 
  }

  if(req.method === 'GET' && req.url === '/protocols') {
    try{
      const protocols = findAllProtocols();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(protocols)); 
    }catch(error){
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro interno do sistema' }));
    }
    return;
  }

  if(req.method === 'GET' && req.url.startsWith('/protocols/')) {
    try {
      let id = req.url.split('/').pop();
      const protocol = findProtocolById(id)
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(protocol));
    } catch (error) {
      let statuscode = error.statusCode;
      if (statuscode == 404) {
        res.writeHead(statuscode, { 'Content-Type': 'application/json' }); 
        res.end(JSON.stringify({ error: 'Protocolo não encontrado' }));
      }
      if (statuscode == 400) {
        res.writeHead(statuscode, { 'Content-Type': 'application/json' }); 
        res.end(JSON.stringify({ error: 'Requisição inválida.' }));
      }
      if(statuscode == 500){
        res.writeHead(statusCode,{'Content-type': 'application/json' })
        res.end(JSON.stringify({error: 'Erro interno do sistema.'}))
      }
    }
    return;
  }

  if(req.method === 'POST' && req.url === '/create-protocol'){
    let body = '';

    //lógica para receber os dados do post, visto que o node puro não carrega os dados automaticamente
    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
      try{
        const data = JSON.parse(body);
        const newProtocol = new Protocol(null,data.tipo,data.nome,data.data);
        createNewProtocol(newProtocol)
        res.writeHead(201,{'Content-type': 'application/json' })
        res.end(JSON.stringify({status: 'created', data: newProtocol}))
      }catch(error){
      let statuscode = error.statusCode;
      if(statuscode == 400){
        res.writeHead(statuscode, { 'Content-Type': 'application/json' }); 
        res.end(JSON.stringify({ error: 'Requisição inválida.' }));
      }
      if(statuscode == 500){
        res.writeHead(statusCode,{'Content-type': 'application/json' })
        res.end(JSON.stringify({error: 'Erro interno do sistema.'}))
      }
      }
    })
    return;
  }

  res.writeHead(404,{'Content-type': 'application/json' })
  res.end(JSON.stringify({error: 'Bad request.'}))
});

server.listen(3000); 