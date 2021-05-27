const emailLogin = document.querySelector('#email');
const senhaLogin = document.querySelector('#senha');

const form = document.querySelector('#signup');



const checkEmail = () => {
    let valid = false;
    const email = emailLogin.value.trim();
    if (!isRequired(email)) {
        showError(emailLogin, 'Email não pode ficar em branco.');
    } else if (!isEmailValid(email)) {
        showError(emailLogin, 'Email inválido.')
    } else {
        showSuccess(emailLogin);
        valid = true;
    }
    return valid;
};

const checkSenha = () => {
    let valid = false;


    const senha = senhaLogin.value.trim();

    if (!isRequired(senha)) {
        showError(senhaLogin, 'Escolha uma senha.');
    } else {
        showSuccess(senhaLogin);
        valid = true;
    }

    return valid;
};


const validEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const validSenha = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
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
};


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let validEmail = checkEmail(),
        validSenha = checkSenha();

    let validFormulario = validEmail && validSenha;

    // submit to the server if the form is valid
    if (validFormulario) {

    };
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
        case 'email':
            checkEmail();
            break;
        case 'senha':
            checkSenha();
            break;
    };
}));

emailLogin.onblur = () => {
    const email = emailLogin.value.trim();
    if (emailLogin.value.length == 0) {
        emailLogin.style.border = 'thin red solid';
    };
};

senhaLogin.onblur = () => {
    if (senhaLogin.value.length == 0) {
        senhaLogin.style.border = 'thin red solid';
    }
};
