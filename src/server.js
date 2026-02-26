import http from 'http';
import { findAllProtocols } from './services/getProtocolServices.js';
import { findProtocolById } from './services/getProtocolServices.js';
import { Protocol } from './entities/chamados.js'
import { createNewProtocol } from './services/createProtocolServices.js';

const server = http.createServer((req, res) => { 

  if (req.method === 'GET' && req.url === '/health') { 
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' })); 
    return; 
  }

  res.writeHead(404,{'Content-type': 'application/json' })
  res.end(JSON.stringify({error: 'Bad request.'}))
});

server.listen(3000); 