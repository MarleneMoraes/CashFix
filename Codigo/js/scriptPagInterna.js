// Chamada das variáveis
const idTabela = document.querySelector('#idTabela');
const InputValor = document.querySelector('#Valor');
const seletorCategoria = document.querySelector('#seletorCategoria');
const categoria = document.querySelector('.categoria');
const taxacao = document.querySelector('.taxacao');

const btnSalvarAplicacao = document.querySelector('#buttonSalvarAplicacao')
const saldoAtual = document.querySelector('#saldoAtual')

// Buttons Radios Entrada e saida
const radioEntrada = document.querySelector('#RadioEntrada')
const radioSaida = document.querySelector('#RadioSaida')

// Variaveis gerais
const respostaRadioSelecionado = ''
const respostaCategoriaSelecionada = ''


//Objeto tipo Date
let data = new Date()
let dia = data.getDate()
let mes = data.getMonth() //month conta de 0 a 11, por isso soma 1
let ano = data.getFullYear()
let dataString = dia + '/' + (mes + 1) + '/' + ano

// Exibe a tabela de transações
function mostrarTabela() {
    const aplicacoes = JSON.parse(localStorage.getItem('aplicacoes') || '[]')

    idTabela.innerHTML = `
    <tr>
    <td>Data</td>
    <td>Categoria</td>
    <td>Transação</td>
    <td>Valor</td>
    </tr>
    `

    aplicacoes.forEach(aplicacao => {
        idTabela.innerHTML += `
        <tr>
        <td>${aplicacao.data}</td>
        <td class="categoria">${aplicacao.categoria}</td>
        <td>${aplicacao.tipoTrasacao}</td>
        <td>R$ ${parseFloat(Number(aplicacao.valor)).toFixed(2)}</td>
        </tr>
        `
    });
}


btnSalvarAplicacao.addEventListener('click', () => {
    const novaAplicacao = {
        data: dataAtual(),
        valor: InputValor.value,
        tipoTrasacao: radioEntrada.checked ? 'Crédito' : 'Débito',
        categoria: seletorCategoria.value,
        taxacaoMensal: taxacao.checked
    }

    cadastrarAplicacao(novaAplicacao);
    mostrarSaldoTotal();
    mostrarTabela();
});

function cadastrarAplicacao(novaAplicacao) {
    let listaDeAplicacoes = JSON.parse(localStorage.getItem('aplicacoes') || '[]');

    listaDeAplicacoes.push(novaAplicacao);

    localStorage.setItem('aplicacoes', JSON.stringify(listaDeAplicacoes));
}


function dataAtual() {
    var data = new Date(),
        dia = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}


function mostrarSaldoTotal() {
    const aplicacoes = JSON.parse(localStorage.getItem('aplicacoes') || '[]');

    let saldoTotal = 0;

    aplicacoes.forEach(aplicacao => {
        if (aplicacao.tipoTrasacao === 'Crédito') {
            saldoTotal += Number(aplicacao.valor);
        } else {
            saldoTotal -= Number(aplicacao.valor);
        }
    })

    saldoAtual.textContent = `R$ ${saldoTotal.toFixed(2)}`;
}

mostrarTabela();

mostrarSaldoTotal();