function adicionarProduto(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const imagem = document.getElementById('imagem').value;

    let precoInput = document.getElementById('preco').value;
    precoInput = precoInput.replace(',', '.');
    const parsePreco = parseFloat(precoInput);
    const preco = isNaN(parsePreco) ? 0.00 : parsePreco.toFixed(2);

    const inputs = [
        { id: 'nome', value: nome },
        { id: 'preco', value: preco },
        { id: 'descricao', value: descricao },
        { id: 'imagem', value: imagem }
    ]

    let inputVazio = false

    inputs.forEach(input => {
        if (!input.value) {
            document.getElementById(input.id).style.border = "2px solid red";
            inputVazio = true;
        } else {
            document.getElementById(input.id).style.border = "2px solid #419c48";

        }
    });


    if (inputVazio) {
        document.getElementById('span-result').innerText = "Preencha todos os campos corretamente!";
        document.getElementById('span-result').style = "color: red;";
    } else {
        document.getElementById('span-result').innerText = "Cadastrado com sucesso!";
        document.getElementById('span-result').style = "color: #419c48;";

        const produto = {
            id: crypto.randomUUID(),
            nome: nome,
            preco: preco,
            descricao: descricao,
            imagem: imagem
        }

        const listaProdutosExistentes = JSON.parse(localStorage.getItem('produtos')) || []
        listaProdutosExistentes.push(produto)
        localStorage.setItem('produtos', JSON.stringify(listaProdutosExistentes))
        document.getElementById('cadastro-form').reset(); // Reseta o formulário para evitar repetição de dados
    }
}

document.getElementById('cadastro-form').addEventListener('submit', adicionarProduto);

// animação
window.onload = function () {
    let contasLocalStorage = JSON.parse(localStorage.getItem('contas')) || [];
    const formContainer = document.getElementById('form-container');
    formContainer.classList.add('animate-fadeIn');

    document.getElementById('entrar').innerText = `Usuário: ${contasLocalStorage[0].nome}`
}

// preview da imagem
document.getElementById('imagem').addEventListener('input', function () {
    const imageUrl = this.value; // Obtém o valor do input
    const imgProduto = document.getElementById('img-produto');
    imgProduto.src = imageUrl; // Atualiza o src da imagem com o valor do input
});