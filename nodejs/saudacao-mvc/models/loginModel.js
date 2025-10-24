module.exports = {
    gerarMensagem: (email, senha) => {
        if (email === "arthur@gmail.com" && senha === "12345") {
            return `Login válido. Bem vindo ${email}`;
        } else {
            return "Login inválido";
        }
    }
};