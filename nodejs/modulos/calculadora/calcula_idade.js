export function idade(nome,anoNasc,anoAtual) {
    idade = anoAtual - anoNasc;
    if (idade < 0)
        return "Ano esta incorreto"
    else
        return `Olá ${nome}, hoje você tem ${idade} anos`
}
/*module.exports = {
    idade
};*/ 