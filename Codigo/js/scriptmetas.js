//Armazenamento de dados
let nomeMeta = document.querySelector('#novoNomeMeta')
let valorMeta = document.querySelector('#novoValor')

btnCriarMeta.addEventListener('click', () => {
  const novaMeta = {
    nome: nomeMeta.value,
    valorMeta: valorMeta.value
  }
  cadastrarNovaMeta(novaMeta);
  mostrarTabela();
})


function cadastrarNovaMeta(novaMeta) {
  let listaDeMetas = JSON.parse(localStorage.getItem('metas') || '[]');
  listaDeMetas.push(novaMeta);

  localStorage.setItem('metas', JSON.stringify(listaDeMetas));
}


//Tabela preta
function mostrarTabela() {
  let metas = JSON.parse(localStorage.getItem('metas') || '[]')

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

  metas.forEach((meta, index) => {
    idTabela.innerHTML += `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${meta.nome}</td>
        <td>R$ ${meta.valorMeta}</td>
        <td>${2021}</td>
      <td>
        <button type="button" class="btn btn-success btn-sm" onclick="removeMeta(${index})">
    Excluir</button>
    </td>
    </tr>
    `
  });
}

function removeMeta(index) {
  let metas = JSON.parse(localStorage.getItem('metas'));
  metas.splice(index, 1);
  localStorage.setItem('metas', JSON.stringify(metas));
  mostrarTabela();
}

mostrarTabela();