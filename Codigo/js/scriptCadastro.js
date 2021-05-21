const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const userEl = document.querySelector('#user');

const form = document.querySelector('#signup');


const checkUsername = () => {
    

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Nome não pode ficar em branco.');
    } else {
        showSuccess(usernameEl);
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

    const user = userEl.value.trim();

    if (!isRequired(user)) {
        showError(userEl, 'Não pode ficar em branco.');
    } else if (userEl.value.length != 14) { //São 14 caracteres por causa da máscara
        showError(userEl, 'O CPF deve conter 11 caracteres.');
    }
    else {

        showSuccess(userEl);

        valid = true;
    }
    return valid;
};




const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email não pode ficar em branco.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email inválido.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Escolha uma senha.');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Digite novamente a senha.');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'As senhas não coincidem. Tente novamente.');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
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
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword(),
    isUserValid = checkCPF();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid && isUserValid;

    // submit to the server if the form is valid
    if (isFormValid) {

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
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
        case 'user':
            checkCPF(e);
    }
}));

usernameEl.onblur = () => {
    const username = usernameEl.value.trim();
    if (!isRequired(username)) {
        usernameEl.style.border = 'thin red solid';
    }
    else {
        usernameEl.style.border = 'thin #00D668 solid';
    }
}

userEl.onblur = () => {
    const user = userEl.value.trim();
    if (!isRequired(user)) {
        userEl.style.border = 'thin red solid';
    }
    else {
        userEl.style.border = 'thin #00D668 solid';
    }
}

emailEl.onblur = () => {
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        emailEl.style.border = 'thin red solid';
    }
    else {
        emailEl.style.border = 'thin #00D668 solid';
    }
}

passwordEl.onblur = () => {
    const password = passwordEl.value.trim();
    if (!isRequired(password)) {
        passwordEl.style.border = 'thin red solid';
    }
    else {
        passwordEl.style.border = 'thin #00D668 solid';
    }
}

confirmPasswordEl.onblur = () => {
    const confirmPassword = confirmPasswordEl.value.trim();
    if (!isRequired(confirmPassword)) {
        confirmPasswordEl.style.border = 'thin red solid';
    }
    else {
        confirmPasswordEl.style.border = 'thin #00D668 solid';
    }
}


userEl.keypress = (e) => mascaraTelefone(e.target.value)

userEl.change = (e) => mascaraTelefone(e.target.value)

const mascaraTelefone = (e) => {

    e.target.value = e.target.value.replace(/[^\d]/g, "")
    e.target.value = e.target.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    //tel.value = valor // Insere o(s) valor(es) no campo
}