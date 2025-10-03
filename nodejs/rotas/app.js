//Importa o módulo http nativo do Node.js
import http from 'http';

const PORT = 3000;

// Cria o servidor HTTP
const server = http.createServer((request, response) => {
    const { method, url } = request // Desestruturação para obter o método e a URL da requisição

    // Define o cabeçalho da resposta para HTML
    response.setHeader('Content-Type', 'text/html;charset=utf-8');      

    //Roteamento básico
    if (url === '/' && method === 'GET') {
        response.statusCode = 200; // OK
        response.end('<h1>Bem-vindo à página inicial!</h1>');
        
    } else if (url === '/sobre' && method === 'GET') {
        response.statusCode = 200; // OK
        response.end('<h1>Sobre nós</h1><p>Esta é uma aplicação de exemplo com Node.js puro.</p>');

    } else if (url === '/contato' && method === 'GET') {
        response.statusCode = 200; // OK
        response.end('<h1>Contato</h1><p>Entre em contato conosco.</p>');

    } else if (url === '/fotos' && method === 'GET') {
        response.statusCode = 200; // OK
        response.end('<h1>Fotos</h1><p>Aqui vai ter fotos</p>');

    }
     else {
        response.statusCode = 404; // Not Found
        response.end('<h1>Página não encontrada</h1>');
    }
});

// Inicia o servidor na porta especificada
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});     