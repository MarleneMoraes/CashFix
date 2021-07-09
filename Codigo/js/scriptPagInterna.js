// Chamada das variáveis
let idTabela = document.querySelector('#idTabela')

let InputValor = document.querySelector("#Valor");

// Buttons Radios Entrada e saida
let RadioEntrada = document.querySelector("#RadioEntrada");
let RadioSaida = document.querySelector("#RadioSaida");


let seletorCategoria = document.querySelector ('#seletorCategoria');

let categoria = document.querySelector('.categoria')
 
let btnSeletorCategoria = document.querySelector('#buttonSalvarAplicacao');


seletorCategoria.addEventListener('change', (option) => {
    categoria.textContent = option.target.value
  });



btnSeletorCategoria.addEventListener('click', () =>{
    async function cadastroDeCateorias(){
        let valoresCadastro = {
            valor: '',
            opçãoRadios: '',
            categoria: '',
        }

        let valorCadastrado = InputValor.value;
        
        console.log(valorCadastrado);
        console.log(radioValueEntrada);
        console.log(radioValueSaida);

    }
    cadastroDeCateorias();
})


















