"use strict";
// Criar a função definida com um parâmetro array do tipo T[], onde T é um tipo genérico.
// A função pode trabalhar com qualquer tipo de array.
function printArray(fruits) {
    // Percorrer o array de dados
    for (let fruit of fruits) {
        // Imprimir os dados do item do array
        console.log(fruit);
    }
}
// Criar o array com valores do tipo string
let nameFruitArray = ["Maça", "Laranja", "Uva", "Açaí"];
// Criar o array com valores do tipo number
let amountFruitArray = [10, 3, 4, 7];
// Chamar a função e enviar o array de string como parâmetro
printArray(nameFruitArray);
// Chamar a função e enviar o array de string como parâmetro
printArray(amountFruitArray);
