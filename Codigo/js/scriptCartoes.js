let botaoMais = document.querySelector('#cartaoAdd')
let cadastroCartao = document.querySelector('#sessaoCadastro')

const tipoCartao = document.querySelector('#tipoCartao')
const tituloExtrato = document.querySelector('#tituloExtrato')

botaoMais.addEventListener("click", function () {
    if (cadastroCartao.style.display === "none") {
        cadastroCartao.style.display = "block"
    } else {
        cadastroCartao.style.display = "none"
    }
});

//const select = document.querySelector('select');
//const h4 = document.querySelector('h4');

tipoCartao.addEventListener('change', (option) => {
    tituloExtrato.textContent = option.target.value
});

//Armazenamento de dados
let nomeCartao = document.querySelector('#nome')
let limiteCartao = document.querySelector('#limite')
let vencimentoCartao = document.querySelector('#vencimento')
let btnSalvarCartao = document.querySelector('#salvarCartao')
let cartoesSalvos = document.querySelector('#idCartoesSalvos')


//Sessão Cartões Salvos

async function mostrarCartoes() {
    let resposta = await JSON.parse(localStorage.getItem('cartoesSalvos') || '[]')

    for (let valor of resposta) {
        cartoesSalvos.innerHTML += `
            <div class="cartao posicaoCartao">
            <div id="cartao">
                    <h4>${valor.cartao}</h4>
                    <input type="text" value="R$ ${valor.limite}">
                    <p class="data"><small>${valor.vencimento}</small></p>
                </div>
            </div>
        `
    }
}

mostrarCartoes()

btnSalvarCartao.addEventListener('click', () => {

    async function adicionarCartao() {
        let resposta = await JSON.parse(localStorage.getItem('cartoesSalvos') || '[]')

        let valoresCartao = {
            cartao: nomeCartao.value,
            limite: limiteCartao.value,
            vencimento: vencimentoCartao.value
        }

        resposta.push(valoresCartao)
        await localStorage.setItem('cartoesSalvos', JSON.stringify(resposta))

        mostrarCartoes()
    }

    adicionarCartao()
})



