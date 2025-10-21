const saudacaoModel = require('../models/saudacaoModel');
const loginModel = require('../models/loginModel');
const { login } = require('./clientesController');

module.exports = {
  index: (req, res) => {
    res.sendFile('index.html', { root: './views' });
  },

  formulario: (req, res) => {
    res.sendFile('formulario.html', { root: './views' });
  },

  saudacao: (req, res) => {
    const { nome, idade, genero } = req.body;
    const mensagem = saudacaoModel.gerarMensagemPersonalizada(nome, idade, genero);
    res.send(`<h1>${mensagem}</h1>`);
  },
  usuarios: (req, res) => {
    res.sendFile('usuarios.html', { root: './views' });
  }, 
  loginMensagem: (req, res) => {
    const { email, senha } = req.body;
    const mensagemP = loginModel.gerarMensagem(email, senha);
    res.send(`<h1>${mensagemP}</h1>`);
  }
};
