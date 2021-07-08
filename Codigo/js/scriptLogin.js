//Variáveis
let btnMostrarSenha = document.querySelector('.fa-eye-slash')

let btnEntrar = document.querySelector('#entrar')

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')

let mensagemErro = document.querySelector('#mensagemErro')

let listaUsuario = []

let validacaoUsuario = {
    email: '',
    senha: '',
}


// Botão de visualizar senha

btnMostrarSenha.addEventListener('click', () => {
    if (senha.getAttribute('type') == 'password') {
        senha.setAttribute('type', 'text')
        btnMostrarSenha.setAttribute('class', 'far fa-eye')
    } else {
        senha.setAttribute('type', 'password')
        btnMostrarSenha.setAttribute('class', 'far fa-eye-slash')
    }
})

// Botão de verificação do login
btnEntrar.addEventListener('click', () => {
    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))

    listaUsuario.forEach((item) => {
        if (email.value == item.emailCadastrado && senha.value == item.senhaCadastrado) {
            validacaoUsuario = {
                email: item.emailCadastrado,
                senha: item.senhaCadastrado
            }
            
            setTimeout(() => {
                window.location.href = 'pagInterna.html'
              }, 2000)
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

        email.focus()
    }

})

