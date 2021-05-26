const nomeCadastroVar = document.querySelector('#nomeCadastro');
const emailCadastroVar = document.querySelector('#emailCadastro');
const senhaCadastroVar = document.querySelector('#senhaCadastro');
const confiSenhaCadastroVar = document.querySelector('#confiSenhaCadastro');
const cpfCadastroVar = document.querySelector('#cpfCadastro');

const form = document.querySelector('#realizarCadastro');


const checkNome = () => {
    

    let valid = false;

    const min = 3,
        max = 25;

    const nomeCadastro = nomeCadastroVar.value.trim();

    if (!isRequired(nomeCadastro)) {
        showError(nomeCadastroVar, 'Nome não pode ficar em branco.');
    } else {
        showSuccess(nomeCadastroVar);
        valid = true;
    }
    return valid;
};


const checkCPF = (e) => {
     mascaraTelefone(e)

     mascaraTelefone(e)

    let valid = false;

    const min = 11,
        max = 11;

    const user = cpfCadastroVar.value.trim();

    if (!isRequired(cpfCadastro)) {
        showError(cpfCadastroVar, 'Não pode ficar em branco.');
    } else if (cpfCadastroVar.value.length != 14) { //São 14 caracteres por causa da máscara
        showError(cpfCadastroVar, 'O CPF deve conter 11 caracteres.');
    }
    else {

        showSuccess(cpfCadastroVar);

        valid = true;
    }
    return valid;
};




const checkEmail = () => {
    let valid = false;
    const emailCadastro = emailCadastroVar.value.trim();
    if (!isRequired(emailCadastro)) {
        showError(emailCadastroVar, 'Email não pode ficar em branco.');
    } else if (!isEmailValid(emailCadastro)) {
        showError(emailCadastroVar, 'Email inválido.')
    } else {
        showSuccess(emailCadastroVar);
        valid = true;
    }
    return valid;
};

const checkSenha = () => {
    let valid = false;


    const senhaCadastro = senhaCadastroVar.value.trim();

    if (!isRequired(senhaCadastro)) {
        showError(senhaCadastroVar, 'Escolha uma senha.');
    } else {
        showSuccess(senhaCadastroVar);
        valid = true;
    }

    return valid;
};

const checkConfiSenha = () => {
    let valid = false;
    // check confirm password
    const confiSenhaCadastro = confiSenhaCadastroVar.value.trim();
    const senhaCadastro = senhaCadastroVar.value.trim();

    if (!isRequired(confiSenhaCadastro)) {
        showError(confiSenhaCadastroVar, 'Digite novamente a senha.');
    } else if (senhaCadastro !== confiSenhaCadastro) {
        showError(confiSenhaCadastroVar, 'As senhas não coincidem. Tente novamente.');
    } else {
        showSuccess(confiSenhaCadastroVar);
        valid = true;
    }

    return valid;
};

const validEmail = (emailCadastro) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailCadastro);
};

const validSenha = (senhaCadastro) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(senhaCadastro);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let validNome = checkNome(),
        validEmail = checkEmail(),
        validSenha = checkSenha(),
        validConfiSenha = checkConfiSenha(),
        validCpf = checkCPF();

    let validFormulario = validNome &&
        validEmail &&
        validSenha &&
        validConfiSenha && validCpf;

    // submit to the server if the form is valid
    if (validFormulario) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'nomeCadastro':
            checkNome();
            break;
        case 'emailCadastro':
            checkEmail();
            break;
        case 'senhaCadastro':
            checkSenha();
            break;
        case 'confiSenhaCadastro':
            checkConfiSenha();
            break;
        case 'cpfCadastro':
            checkCPF(e);
    }
}));

nomeCadastroVar.onblur = () => {
    const nomeCadastro = nomeCadastroVar.value.trim();
    if (!isRequired(nomeCadastro)) {
        nomeCadastroVar.style.border = 'thin red solid';
    }
    else {
        nomeCadastroVar.style.border = 'thin #00D668 solid';
    }
}

cpfCadastroVar.onblur = () => {
    const cpfCadastro = cpfCadastroVar.value.trim();
    if (!isRequired(cpfCadastro)) {
        cpfCadastroVar.style.border = 'thin red solid';
    }
    else {
        cpfCadastroVar.style.border = 'thin #00D668 solid';
    }
}

emailCadastroVar.onblur = () => {
    const emailCadastro = emailCadastroVar.value.trim();
    if (!isRequired(emailCadastro)) {
        emailCadastroVar.style.border = 'thin red solid';
    }
    else {
        emailCadastroVar.style.border = 'thin #00D668 solid';
    }
}

senhaCadastroVar.onblur = () => {
    const senhaCadastro = senhaCadastroVar.value.trim();
    if (!isRequired(senhaCadastro)) {
        senhaCadastroVar.style.border = 'thin red solid';
    }
    else {
        senhaCadastroVar.style.border = 'thin #00D668 solid';
    }
}

confiSenhaCadastroVar.onblur = () => {
    const confiSenhaCadastro = confiSenhaCadastroVar.value.trim();
    if (!isRequired(confiSenhaCadastro)) {
        confiSenhaCadastroVar.style.border = 'thin red solid';
    }
    else {
        confiSenhaCadastroVar.style.border = 'thin #00D668 solid';
    }
}


cpfCadastroVar.keypress = (e) => mascaraTelefone(e.target.value)

cpfCadastroVar.change = (e) => mascaraTelefone(e.target.value)

const mascaraTelefone = (e) => {

    e.target.value = e.target.value.replace(/[^\d]/g, "")
    e.target.value = e.target.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    //tel.value = valor // Insere o(s) valor(es) no campo
}

/////////////////////////////////////////////////////////////////////


function cadastraUsuario() {
    const $nome = document.getElementById('nomeCadastro');
    const $cpf = document.getElementById('cpfCadastro');
    const $email = document.getElementById('emailCadastro');
    const $senha = document.getElementById('senhaCadastro');
    const $cadastrarBtn = document.getElementById('cadastrar');

    var dados = JSON.parse(localStorage.getItem('dadosCadastro'))
    
    if (dados == null) {
        localStorage.setItem("dadosCadastro", "[]");
        dados = [];
    }

    var auxRegistro = {
        nome: $nome.value,
        cpf: $cpf.value,
        email: $email.value,
        senha: $senha.value
    }

    dados.push(auxRegistro);
    localStorage.setItem("dadosCadastro", JSON.stringify(dados));
};