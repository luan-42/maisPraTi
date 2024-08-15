const prompt = require('prompt-sync')();

function redColor(msg) {
    return `\x1b[31m${msg}\x1b[0m`;
}

function yellowColor(msg) {
    return `\x1b[33m${msg}\x1b[0m`;
}

//Lê apenas número do usuário
function readNumber(msg) {
    let result = Number(prompt(msg));
    while(isNaN(result)) {
        console.log(redColor("Entrada inválida!"));
        result = Number(prompt(msg));
    }
    return result;
}

//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
function isEven() {
    let number = readNumber("Digite um número: ");
    let result = "Ímpar";
    if (number % 2 === 0)
        result = "Par"
    console.log(`O número ${yellowColor(number)} é ${result}`);
}

//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
function classifyAge() {
    let age = readNumber("Digite a idade de uma pessoa: ");
    let result;
    if (age <= 12)
        result = "criança";
    else if (age <= 17)
        result = "adolescente";
    else if (age <= 64)
        result = "adulto";
    else
        result = "idoso";
    console.log(`Com ${yellowColor(age)} anos é considerado ${result}`);
}