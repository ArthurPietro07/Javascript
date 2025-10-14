const saudacao = require('./models/saudacaoModel');

const casos = [
  { nome: 'Ana', idade: 10 },
  { nome: 'Bruno', idade: 15 },
  { nome: 'Carlos', idade: 30 },
  { nome: 'Dona', idade: 70 },
  { nome: 'ErroNeg', idade: -1 },
  { nome: 'ErroAlto', idade: 100 },
  { nome: 'NaN', idade: NaN },
  { nome: 'String', idade: '20' }
];

casos.forEach(c => {
  console.log(c, '=>', saudacao.gerarMensagemPersonalizada(c.nome, c.idade));
});
