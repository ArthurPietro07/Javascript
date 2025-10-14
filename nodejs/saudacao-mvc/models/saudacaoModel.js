module.exports = {
  gerarMensagemPersonalizada: (nome, idade, genero) => {
    let faixaEtaria;
    // validação: garantir que idade seja um número válido antes de qualquer comparação
    if (idade < 0 || idade >= 100) {
      return "Idade inválida";
    }

    if (idade < 12) {
      faixaEtaria = "criança";
    } else if (idade < 18) {
      faixaEtaria = "adolescente";
    } else if (idade < 60) {
      faixaEtaria = "adulto";
    } else if (idade < 100){
      faixaEtaria = "idoso";
    }

    return `Olá, ${nome}! Você tem ${idade} anos, é ${faixaEtaria} e é do gênero ${genero}.`;
  }
};
