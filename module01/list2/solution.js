const prompt = require('prompt-sync')();

//Manipulação de Objetos
//1. Acessando Propriedades de Objetos
//Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console.
function showObjectProperties() {
    let carro = {
        marca: "Chevrolet",
        modelo: "Impala",
        ano: "1967",
        cor: "preto"
    };

    for (const property in carro) {
        console.log(`${property}: ${carro[property]}`);
    }
}

//2. Verificando Propriedades
//Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
function verifyObjectProperties() {
    let livro = {
        titulo: "O caminho dos reis",
        autor: "Brandon Sanderson",
        anoPublicacao: 2010,
        genero: "Alta fantasia"
    }
    let target = "editora";
    let hasTarget = false;

    for (const property in livro) {
        if (property === target)
            hasTarget = true;
    }

    if (!hasTarget)
        livro[target] = "Trama";

    console.log(livro);
}

//3. Filtrando Propriedades de Objetos
//Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades.
function filterObjectProperties() {
    let produto = {
        quantidade: 120,
        vendidos: 90,
        preco: 150,
    }
    let value = 100;
    let result = {};

    for (const property in produto) {
        if (produto[property] > value)
            result[property] = produto[property];
    }
    console.log(result);
}

//Manipulação de Arrays de Objetos com for of
//4. Iterando Sobre Arrays de Objetos
//Objetivo: Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.
function showPeopleArray() {
    let pessoas = [
        {
            nome: "Mark Zuckerberg",
            idade: 40,
            cidade: "Califórnia"
        },
        {
            nome: "Craig Mullins",
            idade: 60,
            cidade: "Haiku Hawaii"
        },
        {
            nome: "Sandra Oh",
            idade: 53,
            cidade: "Ottawa"
        }
    ]

    for (const pessoa of pessoas) {
        console.log(`Nome: ${pessoa.nome}\nIdade: ${pessoa.idade}\nCidade: ${pessoa.cidade}\n`)
    }
}

//5. Calculando Valores em Arrays de Objetos
//Objetivo: Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.
function calculateStudentAverages() {
    let alunos = [
        {
            nome: "Izuku Midoriya",
            nota1: 5,
            nota2: 10
        },
        {
            nome: "Katsuki Bakugou",
            nota1: 8,
            nota2: 9
        },
        {
            nome: "Ochaco Uraraka",
            nota1: 8,
            nota2: 8
        },
        {
            nome: "Shoto Todoroki",
            nota1: 10,
            nota2: 8
        }
    ];

    for (const aluno of alunos) {
        console.log(`${aluno.nome}: ${(aluno.nota1 + aluno.nota2)/2}`);
    }
}

//6. Filtrando Arrays de Objetos
//Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.
function filterObjectArray() {
    let funcionarios = [
        {
            nome: "Anderson Gaveta",
            cargo: "Editor de vídeo",
            salario: 1500
        },
        {
            nome: "Fabio Akita",
            cargo: "Programador",
            salario: 2500
        },
        {
            nome: "Tiago Hoisel",
            cargo: "Ilustrador",
            salario: 5000
        }
    ]

    let value = 2500;
    for (const funcionario of funcionarios) {
        if (funcionario.salario >= value)
            console.log(funcionario);
    }
}

//Manipulação de Arrays de Objetos com forEach
//7. Modificando Objetos em um Array
//Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.
function modifyObjectsArray() {
    let produtos = [
        {nome: "Nintendo Switch", preco: 2200, desconto: 10},
        {nome: "Playstation 5", preco: 3500, desconto: 10},
        {nome: "Xbox series x", preco: 4000, desconto: 10}
    ];
    
    produtos.forEach(produto => {
        produto.preco_final = produto.preco - produto.preco * (produto.desconto /100);
        let preco = produto.preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        let preco_final = produto.preco_final.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        console.log(`O ${produto.nome} custa ${preco} com o desconto de ${produto.desconto}% o valor final é de ${preco_final}`);
    });
}

//8. Criando Novos Arrays a Partir de Objetos
//Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.
function createArrayFromObjects() {
    let filmes = [
        {titulo: "A Viagem de Chihiro", diretor: "Hayao Miyazaki", anoLancamento: 2001},
        {titulo: "Os Infiltrados", diretor: "Martin Scorsese", anoLancamento: 2006},
        {titulo: "O Fabuloso Destino de Amélie Poulain", diretor: "Jean-Pierre Jeunet", anoLancamento: 2001}
    ];
    let result = [];
    filmes.forEach(filme => result.push(filme.titulo));
    console.log(result);
}

//9. Contabilizando Elementos com uma Condição
//Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.
function countByCondition() {
    let clientes = [
        {nome: "Jim Parsons", idade: 51, cidade: "Houston"},
        {nome: "Kaley Cuoco", idade: 38, cidade: "Camarillo"},
        {nome: "Simon Helberg", idade: 43, cidade: "Los Angeles"},
        {nome: "Timothée Chalamet", idade: 28, cidade: "Nova Iorque"},
        {nome: "Zendaya", idade: 28, cidade: "Oakland"}
    ];

    let over30 = 0;
    clientes.forEach(cliente => {if (cliente.idade > 30) over30++});
    console.log(`${over30} clientes possuem mais de 30 anos.`);
}

//Combinação de Estruturas
//10. Criando Relatórios com Objetos e Arrays
//Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.
function generateReport() {
    let vendas = [
        {produto: "Livros", quantidade: 5, valor: 50},
        {produto: "Mochilas", quantidade: 4, valor: 150},
        {produto: "Canetas", quantidade: 6, valor: 2},
        {produto: "Cadernos", quantidade: 7, valor: 20},
    ];
    let total = 0;
    vendas.forEach(venda => total += venda.quantidade * venda.valor);
    console.log(`Valor total: ${total.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`);
}

//11. Agrupando Elementos com forEach
//Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.
function groupElements() {
    let pedidos = [
        {cliente: "João", produto: "Notebook", quantidade: 1},
        {cliente: "Maria", produto: "Computador", quantidade: 1},
        {cliente: "João", produto: "Pendrive", quantidade: 5},
        {cliente: "Maria", produto: "monitor", quantidade: 2}
    ];
    let result = {};
    pedidos.forEach(produto => result[produto.cliente] = result[produto.cliente] 
        ? result[produto.cliente] + produto.quantidade 
        : produto.quantidade);
    console.log(result);
}

//12. Atualizando um Array de Objetos
//Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
function updateObjectsArray() {
    let estoque = [
        {produto: "PenDrive", quantidade: 15, minimo: 20},
        {produto: "Teclado", quantidade:8, minimo: 10},
        {produto: "Mouse", quantidade: 15, minimo: 15}
    ];
    estoque.forEach(produto => {
        if(produto.quantidade < produto.minimo) {
            produto.quantidade *= 2;
        }
    });
    console.log(estoque);
}

//13. Implementando um Carrinho de Compras
//Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.
function  shoppingCart() {
    let carrinho = {
        itens: [
            {nome: "Café", quantidade: 5, precoUnitario: 20},
            {nome: "Pepsi", quantidade: 4, precoUnitario: 9},
            {nome: "Cup Noodles", quantidade: 20, precoUnitario: 6},
            {nome: "KitKat", quantidade: 2, precoUnitario: 3.5}
        ]
    };
    let total = 0;
    carrinho.itens.forEach(item => total += item.quantidade * item.precoUnitario);

    console.log(`Valor total dos ${carrinho.itens.length} itens no carrinho: ${total.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`);

}
//14. Manipulando Objetos Complexos
//Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.
function ManipulatingComplexObjects() {
    let empresa = {
        departamentos: [
            {nome: "Desenvolvimento de Produto", funcionarios: ["Maria Silva", "Lucas Almeida", "Carla Martins"]},
            {nome: "Vendas e Marketing", funcionarios: ["Pedro Oliveira", "Renato Lima", "Paula Ribeiro"]},
            {nome: "Atendimento ao Cliente", funcionarios: ["Rafael Gomes", "Júlia Lima", "Bruno Rodrigues"]},
        ]
    }
    for (const departamento of empresa.departamentos) {
        for (const funcionario in departamento.funcionarios) {
            console.log(`${departamento.nome}: ${departamento.funcionarios[funcionario]}`);
        }
        console.log();
    }
}

//15. Filtrando e Somando Valores
//Objetivo: Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.
function filterAndSumValues() {
    let transacoes = [
        {tipo: "entrada", valor: 90},
        {tipo: "saída", valor: 700},
        {tipo: "saída", valor: 1200},
        {tipo: "entrada", valor: 1900},
        {tipo: "saída", valor: 500},
        {tipo: "entrada", valor: 1400},
    ]
    let result = 0;
    transacoes.forEach(transacao => result = transacao.tipo === "entrada" 
        ? result + transacao.valor 
        : result - transacao.valor);

    console.log(`Saldo final: ${result.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`)
}

function grayColor(msg) {
    return `\x1b[90m${msg}\x1b[0m`;
}

function blueColor(msg) {
    return `\x1b[34m${msg}\x1b[0m`;
} 

//Menu de opções para escholer o exercício
let loop = true;
let functions = {
    "Sair": () => {loop = false},
    "Acessando Propriedades de Objetos": showObjectProperties,
    "Verificando Propriedades": verifyObjectProperties,
    "Filtrando Propriedades de Objetos": filterObjectProperties,
    "Iterando Sobre Arrays de Objetos": showPeopleArray,
    "Calculando Valores em Arrays de Objetos": calculateStudentAverages,
    "Filtrando Arrays de Objetos": filterObjectArray,
    "Modificando Objetos em um Array": modifyObjectsArray,
    "Criando Novos Arrays a Partir de Objetos": createArrayFromObjects,
    "Contabilizando Elementos com uma Condição": countByCondition,
    "Criando Relatórios com Objetos e Arrays": generateReport,
    "Agrupando Elementos com forEach": groupElements,
    "Atualizando um Array de Objetos": updateObjectsArray,
    "Implementando um Carrinho de Compras": shoppingCart,
    "Manipulando Objetos Complexos": ManipulatingComplexObjects,
    "Filtrando e Somando Valores": filterAndSumValues
};
let options = Object.keys(functions);

while(loop) {
    console.clear();
    console.log(blueColor("[Escolha uma opção]"));
    for (let i = 0; i < options.length; i++) {
        console.log(`${i} - ${options[i]}`);
    }

    let choice = Number(prompt("Escolha: "));
    while (isNaN(Number(choice)) || !Number.isInteger(choice) || (choice >= options.length || choice < 0)) {
        console.log(grayColor(`Escolha inválida! Escolha uma opção entre 0 e ${options.length - 1}.`));
        choice = Number(prompt("Escolha: "));
    }

    console.clear();
    choice = options[choice];
    console.log(blueColor(`[${functions[choice].name}]`))
    functions[choice]();
    if (choice !== "Sair")
        prompt();
    console.clear();
}