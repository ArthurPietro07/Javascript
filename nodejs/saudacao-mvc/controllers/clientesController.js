const loginModel = require('../models/loginModel');


module.exports = {
  index: (req, res) => {
    res.sendFile('clientes.html', { root: './views' });
  },

  login: (req, res) => {
    res.sendFile('verificalogin.html', { root: './views' });
  },
  loginMensagem: (req, res) => {
    const { email, senha } = req.body;
    const mensagemP = loginModel.gerarMensagem(email, senha);
    res.send(`<!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <title>Início</title>
      <link rel="stylesheet" href="../stylesheets/estilo.css">
    </head>
    <body>
      <h1>${mensagemP}</h1>
    </body>
    </html>`);
  }
}