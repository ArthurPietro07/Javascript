const cadastradoModel = require("../models/cadastroModel");


module.exports = {
  produtos: (req, res) => {
    res.sendFile('produtos.html', { root: './views' });
  },

  camisetas: (req, res) => {
    res.sendFile('camisetas.html', { root: './views' });
  },
  cadastro: (req, res) => {
    res.sendFile('cadastro.html', { root: './views' });
  },

  cadastrado: (req, res) => {
    const { id, descricao, quantidade, preco } = req.body;
    const mensagem = cadastradoModel.gerarMensagem(id, descricao, quantidade, preco);
    res.end(`<!DOCTYPE html>
      <html lang="pt-br">
        <head>
          <meta charset="UTF-8">
            <title>Início</title>
            <link rel="stylesheet" href="../stylesheets/estilo.css">
            </head>
            <body>
              <h1>${mensagem}</h1>
            </body>
          </html>`);
  }
};