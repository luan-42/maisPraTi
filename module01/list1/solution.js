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
    console.log(`O número ${yellowColor(number)} é ${result}.`);
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
    console.log(`Com ${yellowColor(age)} anos de idade é considerado ${result}.`);
}

//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
function studentResult() {
    let grade = readNumber("Digite a nota do estudante: ");
    while(!(grade >= 0 && grade <= 10)) {
        console.log(yellowColor("A nota deve estar entre 0 e 10!"));
        grade = readNumber("Digite a nota do estudante: ");
    }
    let result;
    if (grade < 4)
        result = "Reprovado";
    else if (grade < 7)
        result = "Recuperação";
    else
        result = "Aprovado";
    console.log(`Com a nota ${yellowColor(grade)} a situação do aluno é de ${result}.`);
}

//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
function menu() {
    console.log("Escolha a cor da mensagem: \n[1] Verde \n[2] Amarelo \n[3] Azul");
    let color = readNumber("Escolha: ");

    switch (color) {
        case 1:
            console.log(greenColor("Você escolheu a cor verde!"));
            break;
        case 2:
            console.log(yellowColor("Você escolheu a cor amarela!"));
            break;
        case 3:
            console.log(blueColor("Você escolheu a cor azul!"));
            break;
        default:
            console.log("Você não escolheu nenhuma das opções.");
            break;
    }
}

//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
function bmiCalculator() {
    let height = readNumber("Digite a altura (cm): ");
    let weight = readNumber("Digite o peso (kg): ");
    let bmi = weight / (height/100) ** 2;

    let result;
    if (bmi <= 18.5)
        result = "baixo peso";
    else if (bmi < 25)
        result = "peso normal";
    else if (bmi < 30)
        result = "sobrepeso";
    else
        result = "obeso";

    console.log(`Seu IMC é de ${yellowColor(bmi.toFixed(2))} e se encaixa na categoria de ${result}.`);
}

//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
function classifyTriangle() {
    let a = readNumber("Digite o valor de A: ");
    let b = readNumber("Digite o valor de B: ");
    let c = readNumber("Digite o valor de C: ");

    //Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
    if (a < b + c && b < a + c && c < a + b) {
        let result;
        //Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
        if (a === b && b === c)
            result = "eqüilátero";
        //Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
        else if (a !== b && b !== c)
            result = "escaleno";
        //Triângulo isósceles: possui dois lados iguais
        else
            result = "isósceles";
        console.log(`Os lados formam um triângulo ${result}.`);
    } else {
        console.log("Os lados não formam um triângulo.");
    }
}

//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
function applePrice() {
    let apples = readNumber("Digite o número de maçãs compradas: ");
    let price = apples < 12 ? 0.30 : 0.25;
    let total = apples * price;
    console.log(`Foram compradas ${apples} maçãs então o valor da conta é de R$ ${yellowColor(total.toFixed(2).replace(".", ","))}.`);
}

//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
function sortTwo() {
    let value1 = readNumber("Digite o primeiro valor: ");
    let value2 = readNumber("Digite o segundo valor: ");
    console.log(yellowColor(value1 < value2 ? `${value1} ${value2}`: `${value2} ${value1}`));
}

//9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.
function countdown() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
}

//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
function tenTimes() {
    let number = readNumber("Digite um número: ");
    for (let i = 0; i < 10; i++) {
        console.log(number);
    }
}

//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
function sumValues() {
    let accumulator = 0;
    for (let i = 1; i <= 5; i++) {
        accumulator += readNumber(`Digite o ${i}º valor: `);
    }
    console.log(`Soma total: ${yellowColor(accumulator)}`);
}

//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
function multiplicationTable() {
    let number = readNumber("Digite um número: ");
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${yellowColor(number * i)}`);
    }
}

//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
function arithmeticMean() {
    let counter = 0, sum = 0, number;
    console.log(`Insira 0 para calcular a média`)
    do {
        number = readNumber(`Insira o ${counter + 1}º número: `);
        if (number !== 0) {
            counter++;
            sum += number;
        }
    } while (number !== 0)
    console.log(`Média aritmética: ${yellowColor(sum / counter)}`);
}

//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
function factorial() {
    let number = readNumber("Insira um número: ");
    let result = 1;
    for (let i = number; i > 0; i--) {
        result *= i;
    }
    console.log(`${number}! = ${yellowColor(result)}`);
}

//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
function fibonacci() {
    let previous, current = 0, next = 1;
    for (let i = 0; i < 10; i++) {
        previous = current;
        current = next;
        next = previous + current;
        console.log(current);
    }
}

//O código a seguir é para um menu de opções para escolher qual função executar.
//Coloca as funções em uma lista
functions = [isEven, classifyAge, studentResult, menu, bmiCalculator, 
    classifyTriangle, applePrice, sortTwo, countdown, tenTimes, 
    sumValues, multiplicationTable, arithmeticMean, factorial, fibonacci];

let choice;
while (true) {
    console.log(greenColor("[Escolha uma opção]"));
    //Imprimi uma mensagem com o nome das funções
    for (let i = 1; i <= functions.length; i++) {
        console.log(`[${i.toString().padEnd(2, " ")}] ${functions[i - 1].name}`);
    }
    choice = readNumber("Escolha: ");
    while (!(choice >= 0 && choice <= 15) || !Number.isInteger(choice)) {
        console.log(yellowColor("A escolha deve estar entre 0 e 15!"));
        choice = readNumber("Escolha: ");
    }
    console.clear();
    //Se escolher 0 finaliza o loop
    if (choice === 0)
        break;
    console.log(greenColor(`[${functions[choice - 1].name}]`));
    //Executa a função escolhida
    functions[choice - 1]();
    prompt();
    console.clear();
}