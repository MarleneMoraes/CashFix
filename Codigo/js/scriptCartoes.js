let botaoMais = document.getElementById('cartaoAdd');

let cadastroCartao = document.querySelector('#sessaoCadastro');

const tipoCartao = document.querySelector('#tipoCartao')
const tituloExtrato = document.querySelector('#tituloExtrato')

botaoMais.addEventListener("click", function (e) {
    e.preventDefault();
    cadastroCartao.style.display = "block";
});

//Armazenamento de dados
const nomeCartao = document.querySelector('#nome')
const limiteCartao = document.querySelector('#limite')
const vencimentoCartao = document.querySelector('#vencimento')
const btnSalvarCartao = document.getElementById('salvarCartao')
const cartoesSalvos = document.getElementById('cartoesSalvos')


//Sessão Cartões Salvos
function mostrarCartoes() {
    let listaDeCartoes = JSON.parse(localStorage.getItem('cartoesSalvos') || '[]')

    cartoesSalvos.innerHTML = '';

    listaDeCartoes.forEach(cartao => {
        cartoesSalvos.innerHTML += `
            <div class="cartao posicaoCartao">
                <div id="cartao">
                    <h4>${cartao.nome}</h4>
                    <input type="text" value="R$ ${cartao.limite}" disabled>
                    <p class="data"><small>${cartao.vencimento}</small></p>
                </div>
            </div>
        `
    });
}



function formataData(data) {
    return data.split('-').reverse().join('/');
}


btnSalvarCartao.addEventListener('click', () => {
    let novoCartao = {
        nome: nomeCartao.value,
        limite: limiteCartao.value,
        vencimento: formataData(vencimentoCartao.value)
    }

    adicionarCartao(novoCartao);
    mostrarCartoes();
})

function adicionarCartao(novoCartao) {
    let listaDeCartoes = JSON.parse(localStorage.getItem('cartoesSalvos') || '[]')

    listaDeCartoes.push(novoCartao)
    localStorage.setItem('cartoesSalvos', JSON.stringify(listaDeCartoes));
}


mostrarCartoes()