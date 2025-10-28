const cadastradoModel = require("../models/cadastroModel");


module.exports={
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
    const { id,descricao,quantidade,preco } = req.body;
    const mensagem = cadastradoModel.gerarMensagem(id, descricao, quantidade, preco);
    res.end(`<h1>${mensagem}</h1>`);
  }
};