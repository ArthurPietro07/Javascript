import http from 'http';
import url from 'url';

// Simulando um "banco de dados" em memória
let usuarios = [
    { id: 1, nome: 'João Silva' },
    { id: 2, nome: 'Maria Santos' }
];

const server = http.createServer((req, res) => {
    const { method } = req;
    const { pathname } = url.parse(req.url, true);
    
    // Configurar CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Tratar preflight CORS
    if (method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    
    // Rota GET /usuarios
    if (pathname === '/usuarios' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(usuarios));
        return;
    }
    
    // Rota GET /usuarios/:id
    if (pathname.startsWith('/usuarios/') && method === 'GET') {
        const id = parseInt(pathname.split('/')[2]);
        const usuario = usuarios.find(u => u.id === id);
        
        if (usuario) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(usuario));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Usuário não encontrado' }));
        }
        return;
    }
    
    // Rota POST /usuarios
    if (pathname === '/usuarios' && method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                
                // Validar dados
                if (!data.nome || typeof data.nome !== 'string') {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Campo "nome" é obrigatório e deve ser uma string' }));
                    return;
                }
                
                const novoUsuario = { 
                    id: usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1, 
                    nome: data.nome 
                };
                
                usuarios.push(novoUsuario);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(novoUsuario));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'JSON inválido' }));
            }
        });
        return;
    }
    
    // Rota raiz
    if (pathname === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head>
                    <title>Servidor Node.js</title>
                    <style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    color: #212529;
    margin: 20px;
    line-height: 1.6;
    text-align: center;
  }

  h1 {
    color: #343a40;
    font-size: 2.5em;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.1em;
    margin-bottom: 1em;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>

                </head>
                <body>
                    <h1>Servidor Funcionando!</h1>
                    <p><a href="/usuarios">Ver usuários</a></p>
                </body>
            </html>
        `);
        return;
    }
    
    // Rota não encontrada
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Rota não encontrada' }));
});

server.listen(8080, () => {
    console.log('Servidor rodando em http://localhost:8080');
    console.log('Teste as rotas:');
    console.log('GET  http://localhost:8080/');
    console.log('GET  http://localhost:8080/usuarios');
    console.log('GET  http://localhost:8080/usuarios/1');
    console.log('POST http://localhost:8080/usuarios');
});