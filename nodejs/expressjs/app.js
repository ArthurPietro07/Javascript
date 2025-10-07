import express from 'express';  

const app = express();
const PORT = 3000;

// Middleware para definir o cabeçalho da resposta
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    next();
});

// Roteamento básico
app.get('/', (req, res) => {
    res.status(200).send('<h1>Bem-vindo à página inicial!</h1>');
});

// Rota sobre
app.get('/sobre', (req, res) => {
    res.status(200).send('<h1>Esta é uma aplicação de exemplo com Express.js.</h1>');
});

// Rota contato
app.get('/contato', (req, res) => {
    res.status(200).send('<h1>Fale conosco.</h1>');
});

// Rota fotos   
app.get('/fotos', (req, res) => {
    res.status(200).send('<h1>Veja nossas fotos.</h1>');
}   
);

// Rota para qualquer outra URL (404)
app.use((req, res) => {
    res.status(404).send('<h1>404 - Página não encontrada!</h1>');
}); 

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 