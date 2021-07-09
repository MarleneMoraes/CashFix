// Chamada das variáveis
let idTabela = document.querySelector('#idTabela')
let InputValor = document.querySelector('#Valor')
let seletorCategoria = document.querySelector('#seletorCategoria')
let categoria = document.querySelector('.categoria')
let btnSeletorCategoria = document.querySelector('#buttonSalvarAplicacao')
let saldoAtual = document.querySelector('#saldoAtual')

// Buttons Radios Entrada e saida
let RadioEntrada = document.querySelector('#RadioEntrada')
let RadioSaida = document.querySelector('#RadioSaida')

// Variaveis gerais
let respostaRadioSelecionado = ''
let respostaCategoriaSelecionada = ''

//Saudação
/*let usuario = document.querySelector('#usuario')
let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))
usuario.setAttribute('style', 'color:white')


listaUsuario.forEach((item) => {
  if (usuarioLogado.value == item.nomeCadastrado) {
    usuarioLogado = item.nomeCadastrado.validaNome
    usuario.innerHTML = `<p>Olá ${usuarioLogado}!</p>`
  }
})

//Validação e acesso a página inicial
if (email.value == validacaoUsuario.email && senha.value == validacaoUsuario.senha) {

  let token = Math.random().toString(16).substring(2)
  localStorage.setItem('token', token)

} else {
  email.setAttribute('style', 'border-color: red')
  senha.setAttribute('style', 'border-color: red')

  mensagemErro.setAttribute('style', 'display: block')
  mensagemErro.innerHTML = 'Usuário ou senha incorretos'

}*/


seletorCategoria.addEventListener('change', (option) => {
    respostaCategoriaSelecionada = option.target.value
})

RadioEntrada.addEventListener('click', () => {
    respostaRadioSelecionado = 'Entrada'
})

RadioSaida.addEventListener('click', () => {
    respostaRadioSelecionado = 'Saida'
})

//Objeto tipo Date
let data = new Date()
let dia = data.getDate()
let mes = data.getMonth() //month conta de 0 a 11, por isso soma 1
let ano = data.getFullYear()
let dataString = dia + '-' + (mes + 1) + '-' + ano

async function mostrarTabela() {
    let resposta = await JSON.parse(localStorage.getItem('ValoresCadastrados') || '[]')

    idTabela.innerHTML = `
    <tr>
        <td>Data</td>
        <td>Categoria</td>
        <td>Transação</td>
        <td>Valor</td>
     </tr>
  `

    for (let valor of resposta) {
        idTabela.innerHTML += `
        <tr>
            <td>${dataString}</td>
            <td class="categoria">${valor.categoria}</td>
            <td>${valor.opcaoRadios}</td>
            <td>R$ ${valor.valor}</td>
        </tr>
        `
    }
}
mostrarTabela()

btnSeletorCategoria.addEventListener('click', () => {

    async function cadastroDeCategorias() {
        let resposta = await JSON.parse(localStorage.getItem('ValoresCadastrados') || '[]')
        let valoresCadastro = {
            valor: InputValor.value,
            opcaoRadios: respostaRadioSelecionado,
            categoria: respostaCategoriaSelecionada
        }

        resposta.push(valoresCadastro)
        await localStorage.setItem('ValoresCadastrados', JSON.stringify(resposta))
        mostrarTabela()
        MostrarSaldoTotal()

    }
    cadastroDeCategorias()
})



async function MostrarSaldoTotal() {
    let respostaTabela = await JSON.parse(localStorage.getItem('ValoresCadastrados') || '[]')
    let respostaSaldo = await JSON.parse(localStorage.getItem('saldoTotal'))

    let converterSaldoParaNumber = parseInt(respostaSaldo)
    let saldo = 0;

    respostaTabela.map((item, index, array) => {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i].opcaoRadios)
            if (array[i].opcaoRadios === 'Saida') {
                saldo -= parseInt(array[i].valor)
            }
        }

        if (array[index].opcaoRadios === 'Entrada') {
            converterSaldoParaNumber = saldo + parseInt(array[index].valor)
        }

    })

    await localStorage.setItem('saldoTotal', JSON.stringify(converterSaldoParaNumber))
    imprimirSaldoAtual()
}

function imprimirSaldoAtual() {
   let saldoTotal = JSON.parse(localStorage.getItem('saldoTotal') || '0.00')

    saldoAtual.innerHTML = `R$ ${saldoTotal}` 
}

imprimirSaldoAtual()

