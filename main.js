
function subtrair() {
    var firstNumber = document.getElementById('first-Number')
    var secondNumber = document.getElementById('second-Number')
    var firstNumber1 = Number(firstNumber.value)
    var secondNumber2 = Number(secondNumber.value)
    var soma = firstNumber1 - secondNumber2
    var resultado = document.getElementById('result')
    resultado.innerText = soma
}

function somar() {
    var firstNumber = document.getElementById('first-Number')
    var secondNumber = document.getElementById('second-Number')
    var firstNumber1 = Number(firstNumber.value)
    var secondNumber2 = Number(secondNumber.value)
    var soma = firstNumber1 + secondNumber2
    var resultado = document.getElementById('result')
    resultado.innerText = soma
}

function multiplicar() {
    var firstNumber = document.getElementById('first-Number')
    var secondNumber = document.getElementById('second-Number')
    var firstNumber1 = Number(firstNumber.value)
    var secondNumber2 = Number(secondNumber.value)
    var soma = firstNumber1 * secondNumber2
    var resultado = document.getElementById('result')
    resultado.innerText = soma
}

function dividir() {
    var firstNumber = document.getElementById('first-Number')
    var secondNumber = document.getElementById('second-Number')
    var firstNumber1 = Number(firstNumber.value)
    var secondNumber2 = Number(secondNumber.value)
    var soma = firstNumber1 / secondNumber2
    var resultado = document.getElementById('result')
    resultado.innerText = soma
}

