// const calculadora = require('./calculadora');
// const calculaIdade = require('./calcula_idade')

import {soma,divisao,subtracao,multiplicacao} from './calculadora.js';
import * as calculaIdade from './calcula_idade.js';

const resultadoSoma = soma(2, 3);
const resultadoDivisao = divisao(10, 10);
const resultadoIdade = calculaIdade.idade("patricio",2000,2000)


console.log("SOMA: " + resultadoSoma)
console.log(resultadoIdade)