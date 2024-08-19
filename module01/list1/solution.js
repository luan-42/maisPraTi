const prompt = require('prompt-sync')();

function redColor(msg) {
    return `\x1b[31m${msg}\x1b[0m`;
}

function greenColor(msg) {
    return `\x1b[32m${msg}\x1b[0m`;
}

function yellowColor(msg) {
    return `\x1b[33m${msg}\x1b[0m`;
}

function blueColor(msg) {
    return `\x1b[34m${msg}\x1b[0m`;
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

//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
function studentResult() {
    let grade = readNumber("Digite a nota do estudante: ");
    while(!(grade >= 0 && grade <= 10)) {
        console.log(yellowColor("A nota deve estar entre 0 e 10!"));
        grade = readNumber("Digite a nota do estudante: ");
    }
    let result;
    if (grade < 6)
        result = "Reprovado";
    else if (grade < 7)
        result = "Recuperação";
    else
        result = "Aprovado";
    console.log(`Com a nota ${yellowColor(grade)} a situação do aluno é de ${result}`);
}

//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
function menu() {
    console.log("Escolha a cor da mensagem: \n1 - Verde \n2 - Amarelo \n3 - Azul");
    let color = readNumber("Escolha: ");
    while(!(color >= 1 && color <= 3)) {
        console.log(redColor("Escolha deve ser entre 1 e 3!"));
        color = readNumber("Escolha: ");
    }
    let msg = "Olá, Mundo!";
    switch (color) {
        case 1:
            console.log(greenColor(msg));
            break;
        case 2:
            console.log(yellowColor(msg));
            break;
        case 3:
            console.log(blueColor(msg));
            break;
    }
}