module.exports = {
    gerarMensagem: (email, senha) => {
        let usuarios = [
            { email: "arthur@gmail.com", senha: "12345"},
            { email: "123@gmail.com", senha: "123"},
            { email: "12345@gmail.com", senha: "12345"}
        ];
        if (usuarios.some(usuario => usuario.email === email && usuario.senha === senha)) {
            return `Login válido. Bem vindo ${email}`;
        } else {
            
            return "Login inválido";
        }
    }
};