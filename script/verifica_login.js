// verifica se o usuario está logado para exibir o botao de cadastrar produto
const logado = window.localStorage.getItem('logado');
let contasLocalStorage = JSON.parse(localStorage.getItem('contas')) || [];

console.log(contasLocalStorage[0].nome)

if (!logado) {
  document.getElementById('btn-cadastrar-produto').style.display = 'none';
} else {
  document.getElementById('entrar').innerText = `Usuário: ${contasLocalStorage[0].nome}`
}
