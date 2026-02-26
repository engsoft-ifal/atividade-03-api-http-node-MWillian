import http from 'http';
import * as ChamadoController from '../src/controller/chamadosController.js'
import * as ApiStatusController from '../src/controller/apiStatusController.js'
const server = http.createServer((req, res) => { 

  if (req.method === 'GET' && req.url === '/health') { 
    return ApiStatusController.GetHealth(res);
  }

  if (req.method === 'GET' && req.url ==='/chamados'){
    return ChamadoController.GetChamados(res);
  };

  if (req.method === 'GET' && req.url.startsWith('/chamados/')){
    return ChamadoController.GetChamado(req,res);
  };
  
  if(req.method === 'POST' && req.url === '/criar-chamado'){
    return ChamadoController.CreateChamado(req,res);
  }

  res.writeHead(404,{'Content-type': 'application/json' })
  res.end(JSON.stringify({error: 'Requisição inválida.',}))
});

server.listen(3000); 