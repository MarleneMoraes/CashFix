let botaoMais = document.querySelector('#cartaoAdd')
let cartao = document.querySelector('#sessaoCadastro')

const tipoCartao = document.querySelector('#tipoCartao')
const tituloExtrato = document.querySelector('#tituloExtrato')

botaoMais.addEventListener("click", function () {
    if (cartao.style.display === "none") {
        cartao.style.display = "block"
    } else {
        cartao.style.display = "none"
    }
});

//const select = document.querySelector('select');
//const h4 = document.querySelector('h4');

tipoCartao.addEventListener('change', (option) => {
  tituloExtrato.textContent = option.target.value
});