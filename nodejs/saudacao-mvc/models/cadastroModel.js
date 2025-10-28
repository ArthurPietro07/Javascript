module.exports = {
    gerarMensagem: (id, descricao, quantidade, preco) => {
        let mensagem = `ID:${ id } Descrição:${ descricao } Quantidade:${ quantidade } Preço:${ preco }`;
       return mensagem;
    }
};