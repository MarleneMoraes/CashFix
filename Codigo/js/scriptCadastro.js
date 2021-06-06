let btn = document.querySelector('#verSenha')
let inputSenha = document.querySelector('#senhaCadastro')
let btnConfirmar = document.querySelector('#verConfirmarSenha')
let inputConfirmarSenha = document.querySelector('#confiSenhaCadastro')

btn.addEventListener('click', ()=>{

  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
    btn.setAttribute('class', 'far fa-eye')
  } else {
    inputSenha.setAttribute('type', 'password')
    btn.setAttribute('class', 'far fa-eye-slash')
  }
})

btnConfirmar.addEventListener('click', ()=>{
  if(inputConfirmarSenha.getAttribute('type') == 'password'){
    inputConfirmarSenha.setAttribute('type', 'text')
    btnConfirmar.setAttribute('class', 'far fa-eye')
  } else {
    inputConfirmarSenha.setAttribute('type', 'password')
    btnConfirmar.setAttribute('class', 'far fa-eye-slash')
  }
})