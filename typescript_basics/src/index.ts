// Criar variável do tipo string
const user: string = "Diego";
console.log(`Usuário: ${user}`);

// Criar variável do tipo número
const speed: number = 12;
console.log(`Velocidade: ${speed}`);

// Criar variável do tipo boolean
const situation: boolean = true;
console.log(`Situação: ${situation}`);

// Criar variável do array de string
const courses: string[] = ["Curso de React", "Curso de Node.js"];
console.log(`Cursos: ${courses}`);

// Criar variável do array de número
const amount: number[] = [5, 2, 7];
console.log(`Quantidade: ${amount}`);

// Criar variável do tipo "tuple" array com tipos diferentes
var person: [string, number, boolean];
person = [user, speed, situation];
console.log(`Usuário: ${person[0]}`);
console.log(`Velocidade: ${person[1]}`);
console.log(`Situação: ${person[2]}`);

// Criar variável do tipo enum
enum DayOfTheWeek {
    Sunday = 1,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
let dia: DayOfTheWeek;
console.log(`Número que representa domingo: ${DayOfTheWeek.Sunday}`);
console.log(`Número que representa sexta: ${DayOfTheWeek.Friday}`);

// Criar variável do tipo any, atribuir qualquer tipo de valor para a variável
let data: any;
data = 10; // Atribuir um valor do tipo número
console.log(`Valor atribuído é número: ${data}`);
data = "Diego" // Atribuir um valor do tipo string
console.log(`Valor atribuído é texto: ${data}`);

// Criar variável do tipo null e undefined
let variableNull: null = null;
let variableUndefined: undefined = undefined;
console.log(`Variável nula: ${variableNull}`);
console.log(`Variável indefinida: ${variableUndefined}`);

// Criar variável do tipo object
interface Client {
    name: string;
    amount: number;
};

let client: Client = {
    name: "Diego",
    amount: 7
};

console.log(`Nome do cliente: ${client.name}`);
console.log(`Quantidade de compras do cliente: ${client.amount}`)

// Criar variável utilizando union indicando um ou mais tipo
const value: string | boolean = "Diego";
console.log(`Valor pode ser string ou boolean: ${value}`)