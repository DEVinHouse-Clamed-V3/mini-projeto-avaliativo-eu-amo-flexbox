// Função de login
function login(event) {
    event.preventDefault();

    const email = document.querySelector('.form-login input[type="email"]').value;
    const senha = document.querySelector('.form-login input[type="password"]').value;

    let listaNoLocalStorage = JSON.parse(localStorage.getItem("contas")); // Pega a lista do localStorage
    if (listaNoLocalStorage === null) listaNoLocalStorage = [];

    const contaEncontrada = listaNoLocalStorage.find(conta => conta.email === email && conta.senha === senha);

    if (contaEncontrada) {
        // Redireciona para a tela de post
        alert('Login realizado com sucesso!');
        window.location.href = 'index.html';
        window.localStorage.setItem('logado', true); // Armazena que o usuário está logado
    } else {
        // Mensagem de erro
        alert('Usuário não encontrado');
    }
}

// Adiciona o evento de submissão ao formulário de login
document.querySelector('.form-login form').addEventListener('submit', login);

// Seleciona o campo de senha
const passwordInput = document.querySelector('.form-login input[type="password"]');

// Evento de paste no campo de senha
passwordInput.addEventListener('paste', (event) => {
    event.preventDefault();

    const pasteData = event.clipboardData.getData('text');

    // Duplica o número de caracteres colados
    passwordInput.value += pasteData.repeat(2);
});