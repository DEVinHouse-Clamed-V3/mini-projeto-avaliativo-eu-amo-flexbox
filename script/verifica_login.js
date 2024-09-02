document.addEventListener('DOMContentLoaded', function() {
    // Verifica o login e exibe o botão de logout, se necessário
    const logado = window.localStorage.getItem('logado');

    if (logado) {
        document.getElementById('btn-cadastrar-produto').style.display = 'block';
        document.getElementById('login-link').style.display = 'none';
        document.getElementById('logout-link').style.display = 'inline';
    } else {
        document.getElementById('btn-cadastrar-produto').style.display = 'none';
        document.getElementById('login-link').style.display = 'inline';
        document.getElementById('logout-link').style.display = 'none';
    }

    // Função para realizar o logout
    document.getElementById('logout-link').addEventListener('click', function() {
        window.localStorage.removeItem('logado');
        window.location.href = 'index.html';
    });
});