// A variavel $user guarda o elemento <input class="form nome" type="text" name="nome" placeholder="Nome" id="username">
const $user = document.getElementById('username');


// A variavel $cpf guarda o elemento <input class="form cpf" type="text" name="cpf" id="cpf" placeholder="CNPJ / CPF"> </br>
const $cpf = document.getElementById('cpf');


// A variavel $email guarda o elemento <input class="form usuario" type="text" name="usuario" placeholder="Email" id="email">
const $email = document.getElementById('email');


// A variavel $password guarda o elemento  <input class="form senha" type="password" name="password" placeholder="Senha" id="password">
const $password = document.getElementById('password');


// A variavel $subscribeBtn guarda o elemento  <button class="botao botao-verde cadastrar" type="submit" value="Cadastrar" id="subscribe"> <a href="pagina-interna.html"> Cadastrar</a></button>
const $subscribeBtn = document.getElementById('subscribe');



$subscribeBtn.addEventListener('click', (e) => {
  // PREVINE O RECARREGAMENTO DA PAGINA
  e.preventDefault();
  const newUser = createNewUser();
  localStorage.setItem('user', JSON.stringify(newUser));
  showUserSubscribed();
})

function createNewUser() {
  const user = {
    name: $user.value,
    cpf: $cpf.value,
    email: $email.value,
    password: $password.value
  }

  return user;
}

function showUserSubscribed() {
  const user = localStorage.getItem('user');

  alert(`${JSON.parse(user).name} foi cadastrado(a) com sucesso`);
}