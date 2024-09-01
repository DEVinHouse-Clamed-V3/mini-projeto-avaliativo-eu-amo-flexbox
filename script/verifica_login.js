// verifica se o usuario está logado para exibir o botao de cadastrar produto
const logado = window.localStorage.getItem('logado');

if (!logado) {
    document.getElementById('btn-cadastrar-produto').style.display = 'none';
} else null