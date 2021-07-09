//Variáveis para os botões 'Nova Meta' e 'Editar Meta'
var btnNovaMeta = document.getElementById('btnNovaMeta');
var btnEditarMeta = document.getElementById('btnEditarMeta');
var containerNovaMeta = document.querySelector('.containerNovaMeta');
var containerEditarMeta = document.querySelector('.containerEditarMeta');


btnNovaMeta.addEventListener('click', function () {

  if (containerNovaMeta.style.display === 'block') {
    containerNovaMeta.style.display = 'none';
  } else {
    containerNovaMeta.style.display = 'block';
  }
});

btnEditarMeta.addEventListener('click', function () {

  if (containerEditarMeta.style.display === 'block') {
    containerEditarMeta.style.display = 'none';
  } else {
    containerEditarMeta.style.display = 'block';
  }
});

//-------------------------------------------------------------


//Armazenamento de dados
let idTabela = document.querySelector('#idTabela')
let novoNomeMeta = document.querySelector('#novoNomeMeta')
let novaDataInicio = document.querySelector('#novaDataInicio')
let novaDataFinal = document.querySelector('#novaDataFinal')
let novoValor = document.querySelector('#novoValor')
let btnCriarMeta = document.querySelector('#btnCriarMeta')
let ordemMeta = 0

//Objeto tipo Date
let data = new Date()
let dia = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()
let validaData = false

mes += 1

/*
//Função para validar se a data é antes da data atual
function dataInicioValida() {
  if (dia.value < data.getDate.value && mes.value < data.getMonth.value && ano.value < data.getFullYear.value) {
    validaData = false
    mensagemErro.setAttribute('style', 'display: block')
    mensagemErro.innerHTML = 'Data Inválida'
  } else {
    validaData = true
  }
}

//Para o Tempo
function calcularTempo (data1, data2){
  let diferenca = Math.floor(novaDataFinal.value - novaDataInicio.value)
  
  var diaTempo = 1000 * 60 * 60 * 24

  var dias = Math.floor(diff / diaTempo)
  var meses = Math.floor(dias / 31)
  var anos = Math.floor(meses / 12)

  var tempo = data2.toDateString();
  message += " was "
  message += days + " dias "
  message += months + " meses "
  message += years + " anos"

  return message
}

*/



//Tabela preta

async function mostrarTabela() {
  let resposta = await JSON.parse(localStorage.getItem('metasCadastradas') || '[]')

  idTabela.innerHTML = `
    <thead>
      <tr class="lista-metas-cabecalho">
        <th scope="col"></th>
        <th scope="col">Meta</th>
        <th scope="col">Valor</th>
        <th scope="col">Tempo</th>
        <th scope="col"></th>
      </tr>
    </thead>
  `

  for (let valor of resposta) {

    idTabela.innerHTML += `
      <tr>
        <th scope="row">${valor.ordemMeta}</th>
          <td>${valor.meta}</td>
          <td>R$ ${valor.valorMeta}</td>
          <td>${valor.Tempo}</td>
          <td>
            <button type="button" class="btn btn-success btn-sm">Editar</button>
            <button type="button" class="btn btn-outline-success btn-sm">Excluir</button>
          </td>
      </tr>
    `

  }
}
mostrarTabela()

btnCriarMeta.addEventListener('click', () => {

  async function adicionarMeta() {
    let resposta = await JSON.parse(localStorage.getItem('metasCadastradas') || '[]')
    let valoresCadastro = {
      ordemMeta: ordemMeta.value,
      meta: novoNomeMeta.value,
      valorMeta: novoValor.value
    }

    resposta.push(valoresCadastro)
    await localStorage.setItem('metasCadastradas', JSON.stringify(resposta))
    mostrarTabela()
    MostrarSaldoTotal()

  }

  ordemMeta+=1
  adicionarMeta()
})


