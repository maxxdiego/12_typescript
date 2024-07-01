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
console.log(`Número que representa domingo: ${DayOfTheWeek.Sunday}`)
console.log(`Número que representa sexta: ${DayOfTheWeek.Friday}`)

// Criar variável do tipo any, atribuir qualquer tipo de valor para a variável
