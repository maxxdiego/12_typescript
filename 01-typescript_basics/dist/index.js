"use strict";
// Criar variável do tipo string
const user = "Diego";
console.log(`Usuário: ${user}`);
// Criar variável do tipo número
const speed = 12;
console.log(`Velocidade: ${speed}`);
// Criar variável do tipo boolean
const situation = true;
console.log(`Situação: ${situation}`);
// Criar variável do array de string
const courses = ["Curso de React", "Curso de Node.js"];
console.log(`Cursos: ${courses}`);
// Criar variável do array de número
const amount = [5, 2, 7];
console.log(`Quantidade: ${amount}`);
// Criar variável do tipo "tuple" array com tipos diferentes
var person;
person = [user, speed, situation];
console.log(`Usuário: ${person[0]}`);
console.log(`Velocidade: ${person[1]}`);
console.log(`Situação: ${person[2]}`);
// Criar variável do tipo enum
var DayOfTheWeek;
(function (DayOfTheWeek) {
    DayOfTheWeek[DayOfTheWeek["Sunday"] = 1] = "Sunday";
    DayOfTheWeek[DayOfTheWeek["Monday"] = 2] = "Monday";
    DayOfTheWeek[DayOfTheWeek["Tuesday"] = 3] = "Tuesday";
    DayOfTheWeek[DayOfTheWeek["Wednesday"] = 4] = "Wednesday";
    DayOfTheWeek[DayOfTheWeek["Thursday"] = 5] = "Thursday";
    DayOfTheWeek[DayOfTheWeek["Friday"] = 6] = "Friday";
    DayOfTheWeek[DayOfTheWeek["Saturday"] = 7] = "Saturday";
})(DayOfTheWeek || (DayOfTheWeek = {}));
let dia;
console.log(`Número que representa domingo: ${DayOfTheWeek.Sunday}`);
console.log(`Número que representa sexta: ${DayOfTheWeek.Friday}`);
// Criar variável do tipo any, atribuir qualquer tipo de valor para a variável
let data;
data = 10; // Atribuir um valor do tipo número
console.log(`Valor atribuído é número: ${data}`);
data = "Diego"; // Atribuir um valor do tipo string
console.log(`Valor atribuído é texto: ${data}`);
// Criar variável do tipo null e undefined
let variableNull = null;
let variableUndefined = undefined;
console.log(`Variável nula: ${variableNull}`);
console.log(`Variável indefinida: ${variableUndefined}`);
;
let client = {
    name: "Diego",
    amount: 7
};
console.log(`Nome do cliente: ${client.name}`);
console.log(`Quantidade de compras do cliente: ${client.amount}`);
// Criar variável utilizando union indicando um ou mais tipo
const value = "Diego";
console.log(`Valor pode ser string ou boolean: ${value}`);
