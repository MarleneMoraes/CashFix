//Variáveis

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validaNome = false

let cpfCnpj = document.querySelector('#cpfCnpj')
let labelCpf = document.querySelector('#labelCpf')
let validaCpf = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validaEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validaSenha = false

let confirmarSenha = document.querySelector('#confirmarSenha')
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')
let validaConfirmarSenha = false

let btnSenha = document.querySelector('#verSenha')
let btnConfirmar = document.querySelector('#verConfirmarSenha')
let btnCadastrar = document.querySelector('#cadastrar')


// Botão de visualizar senha
btnSenha.addEventListener('click', ()=>{
  
  if(senha.getAttribute('type') == 'password'){
    senha.setAttribute('type', 'text')
    btnSenha.setAttribute('class', 'far fa-eye')
  } else {
    senha.setAttribute('type', 'password')
    btnSenha.setAttribute('class', 'far fa-eye-slash')
  }
})

btnConfirmar.addEventListener('click', ()=>{
  
  if(confirmarSenha.getAttribute('type') == 'password'){
    confirmarSenha.setAttribute('type', 'text')
    btnConfirmar.setAttribute('class', 'far fa-eye')
  } else {
    confirmarSenha.setAttribute('type', 'password')
    btnConfirmar.setAttribute('class', 'far fa-eye-slash')
  }
})

//Validação de Cadastro
nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2){
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
  if (cpfCnpj.value.length != 11 || cpfCnpj.value.length != 14){
    cpfCnpj.setAttribute('style', 'border-color: red')
    validaCpf = false
  } else {
    cpfCnpj.setAttribute('style', 'border-color: var(--efeito-active)')
    validaCpf = true
  }
})

email.addEventListener('keyup', () => {
  if (document.forms[0].email.value=="" || document.forms[0].email.value.indexOf('@')==-1 || document.forms[0].email.value.indexOf('.')==-1 ) {
    email.setAttribute('style', 'border-color: red')
    validaEmail = false
  } else {
    email.setAttribute('style', 'border-color: var(--efeito-active)')
    validaEmail = true
  }
})

senha.addEventListener('keyup', () => {
  if (senha.value.length < 5){
    senha.setAttribute('style', 'border-color: red')
    validaSenha = false
  } else {
    senha.setAttribute('style', 'border-color: var(--efeito-active)')
    validaSenha = true
  }
})

confirmarSenha.addEventListener('keyup', () => {
  if (senha.value != confirmarSenha.value){
    confirmarSenha.setAttribute('style', 'border-color: red')
    validaConfirmarSenha = false
  } else {
    confirmarSenha.setAttribute('style', 'border-color: var(--efeito-active)')
    validaConfirmarSenha = true
  }
})

//Verificação das etapas
btnCadastrar.addEventListener('click', ()=>{
  if(validaNome && validaUsuario && validaSenha && validaConfirmarSenha){
    alert('deu booom')
  } else { 
    alert('Verifique seus dados e tente novamente')
  }
})