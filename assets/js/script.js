/*
- Tipagem fraca dinâmica (inferencia de dados)
- Case senstive ( a != A)
- Criação de variáveis
-- Let -> "Let it change" - > variável que pode ter o valor alterado
-- const - > "constant" - > variavel que não pode ter o valor alterado - precisamos declarar o valor
-- var -> "variable" -> variavel que pode ou não ter o valor alterado

Posso acessar:

por Tag: getElementByTagName()
por ID: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletro: querySelector()

DOM -> Document-Object Model
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaEmail2() {
    // criação do padrão de email, vai aceitar caracteres + @ + caracteres + . + 2 ou 3 caracteres pra finalizar
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let txtEmail = document.querySelector('#txtEmail')
  
    // o if será feito de uma forma diferente, verificando se o que a pessoa digitou condiz com o padrão do e-mail (match)
    // caso de certo, e-mail válido, senão, e-mail inválido
    if(email.value.match(regex)) {
      txtEmail.innerHTML = 'E-mail válido'
      txtEmail.style.color = 'green'
      emailOk = true
    } else {
      txtEmail.innerHTML = 'E-mail inválido'
      txtEmail.style.color = 'red'
      emailOk = false
    }
  }

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.heigth = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.heigth = '250px'
}
