// Importa o módulo http nativo do Node.js
const http = require('http');


// Realiza uma requisição GET para a URL especificada
http.get('http://jsonplaceholder.typicode.com/todos/57', (res) => {
    let data = '';

    // Recebe os dados em partes (chunks) e os concatena
    res.on('data', (chunk) => {
        data += chunk;
    });

    // Quando todos os dados forem recebidos, exibe o resultado como objeto
    res.on('end', () => {
        console.log(JSON.parse(data));
    });

// Trata possíveis erros na requisição
}).on('error', (err) => {
    console.error("Error: " + err.message);
});