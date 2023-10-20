//console.log("Hello world!");
//https://github.com/Julianawbc/Const-Let-Var.git

// 1- Escreva uma função chamada dobrar que recebe um numero como parametro e retorna o dobro desse numero, usando a sintaxe de função tradicional:

function dobrar(numero) {
    return numero * 2;
}

//2 - Reescrever a função acima usando a sintaxe de função anônima atribuída a uma variável:

const dobrar = function(numero) {
    return numero * 2;
};

//3 - Transformando a função acima em uma função arrow:

const dobrar = numero => numero * 2;

//4 - Escreva uma função chamada saudação que recebe o nome de uma pessoa como parâmetro e retorna uma saudação personalizada. Use uma sintaxe da função arrow:

const saudacao = nome => `Olá, ${nome}! Bem-vindo!`;

// 5 - Reescrevendo a função acima usando a sintaxe de função tradicional:

function saudacao(nome) {
    return "Olá, " + nome + "! Bem-vindo!";
}

// 6 - Criando uma função chamada somarNumeros que recebe um número indeterminado de argumentos e retorna a soma desses números usando a sintaxe de função tradicional:

function somarNumeros() {
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

// 7 - Transformando a função somarNumeros em uma arrow function:

const somarNumeros = (numeros) => {
    return numeros.reduce((soma, numero) => soma + numero, 0);
};

//8 - Escreva uma função chamada saudação que recebe o nome de uma pessoa como parâmetro e retorna uma saudação personalizada. A função deverá retornar "Olá Juliana!":

function saudacao(nome) {
    return "Olá " + nome + "!";
}
/*const nomePessoa = "Juliana";
const mensagemSaudacao = saudacao(nomePessoa);
console.log(mensagemSaudacao);*/


// 9 - Criar uma função chamada soma que recebe dois números como parâmetros e retorna a soma desses números , implemente uma função chamada maiorNumero que recebe três números como parâmetros e retorna o maior número entre eles:

// Função para somar dois números
function soma(numero1, numero2) {
    return numero1 + numero2;
}

// Função para encontrar o maior número entre três
function maiorNumero(numero1, numero2, numero3) {
    if (numero1 >= numero2 && numero1 >= numero3) {
        return numero1;
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        return numero2;
    } else {
        return numero3;
    }
}

// 10 - Crie uma função chamada contarVogais que recebe uma string como parâmetro e retorna o número de vogais presentes nessa string, implemente uma função chamada calcularMedia que recebe um array de números como parametro e retorna a media desses números:

function contarVogais(str) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;

    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            contador++;
        }
    }

    return contador;
}

// Função para calcular a média de um array de números
function calcularMedia(numeros) {
    if (numeros.length === 0) {
        return 0;
    }

    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    const media = soma / numeros.length;
    return media;
}


