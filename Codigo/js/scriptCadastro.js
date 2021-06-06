//Variáveis

const nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validaNome = false

const cpfCnpj = document.querySelector('#cpfCnpj')
let labelCpf = document.querySelector('#labelCpf')
let validaCpf = false

const email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validaEmail = false

const senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validaSenha = false

const confirmarSenha = document.querySelector('#confirmarSenha')
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')
let validaConfirmarSenha = false

let btnSenha = document.querySelector('#verSenha')
let btnConfirmar = document.querySelector('#verConfirmarSenha')
let btnCadastrar = document.querySelector('#cadastrar')

let mensagemErro = document.querySelector('#mensagemErro')
let mensagemSucesso = document.querySelector('#mensagemSucesso')

// Botão de visualizar senha
btnSenha.addEventListener('click', () => {

  if (senha.getAttribute('type') == 'password') {
    senha.setAttribute('type', 'text')
    btnSenha.setAttribute('class', 'far fa-eye')
  } else {
    senha.setAttribute('type', 'password')
    btnSenha.setAttribute('class', 'far fa-eye-slash')
  }
})

btnConfirmar.addEventListener('click', () => {

  if (confirmarSenha.getAttribute('type') == 'password') {
    confirmarSenha.setAttribute('type', 'text')
    btnConfirmar.setAttribute('class', 'far fa-eye')
  } else {
    confirmarSenha.setAttribute('type', 'password')
    btnConfirmar.setAttribute('class', 'far fa-eye-slash')
  }
})

//Validação de Cadastro
nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red')
    nome.setAttribute('style', 'border-color: red')
    validaNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    nome.setAttribute('style', 'border-color: var(--efeito-active)')
    validaNome = true
  }
})

cpfCnpj.addEventListener('keyup', () => {
  if (cpfCnpj.value.length != 11 || cpfCnpj.value.length != 14) {
    cpfCnpj.setAttribute('style', 'border-color: red')
    validaCpf = false
  } else {
    cpfCnpj.setAttribute('style', 'border-color: var(--efeito-active)')
    validaCpf = true
  }
})

email.addEventListener('keyup', () => {
  if (document.forms[0].email.value == "" || document.forms[0].email.value.indexOf('@') == -1 || document.forms[0].email.value.indexOf('.') == -1) {
    email.setAttribute('style', 'border-color: red')
    validaEmail = false
  } else {
    email.setAttribute('style', 'border-color: var(--efeito-active)')
    validaEmail = true
  }
})

senha.addEventListener('keyup', () => {
  if (senha.value.length < 5) {
    senha.setAttribute('style', 'border-color: red')
    validaSenha = false
  } else {
    senha.setAttribute('style', 'border-color: var(--efeito-active)')
    validaSenha = true
  }
})

confirmarSenha.addEventListener('keyup', () => {
  if (senha.value != confirmarSenha.value) {
    confirmarSenha.setAttribute('style', 'border-color: red')
    validaConfirmarSenha = false
  } else {
    confirmarSenha.setAttribute('style', 'border-color: var(--efeito-active)')
    validaConfirmarSenha = true
  }
})

//Verificação das etapas
btnCadastrar.addEventListener('click', (e) => {
   e.preventDefault();
   
   if (validaNome == true && validaEmail == true && validaSenha == true && validaConfirmarSenha == true) {
    mensagemErro.setAttribute('style', 'display: none')
    mensagemErro.innerHTML = ''
    mensagemSucesso.setAttribute('style', 'display: block')
    mensagemSucesso.innerHTML = 'Cadastrando usuário...'
    btnCadastrar.innerHTML = '<a href="pagina-interna.html">Cadastre-se</a>'

   
    const newNome = criarNovoUsuario();
    localStorage.setItem('nome', JSON.stringify(newNome));
    mostrarUsuarioCadastrado();

    function criarNovoUsuario() {
      const nome = {
        name: $nome.value,
        cpf: $cpfCnpj.value,
        email: $email.value,
        password: $senha.value
      }
    
      return nome;
    }
    
    function mostrarUsuarioCadastrado() {
      const nome = localStorage.getItem('nome');
    
      alert(`${JSON.parse(nome).name} foi cadastrado(a) com sucesso!`);
    }
  } else {
    mensagemSucesso.setAttribute('style', 'display: none')
    mensagemSucesso.innerHTML = ''
    mensagemErro.setAttribute('style', 'display: block')
    mensagemErro.innerHTML = 'Preencha todos os campos corretamente'
    btnCadastrar.innerHTML = '<a href="">Cadastre-se</a>'
  }
})