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
        res.send(`<h1>${mensagemP}</h1>`);
    }
}