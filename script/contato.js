document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('formContato');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var nome = document.getElementById('nome').value.trim();
        var email = document.getElementById('email').value.trim();
        var tel = document.getElementById('tel').value.trim();

        if (nome && email && tel) {
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
            form.reset(); // Limpar o formulário
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
