console.log("Como criar função");

// Criar a função para receber duas variáveis do tipo string e retornar a string
function getUser(name: string, lastname: string): string{
    return `${name} ${lastname}`
}
// Chamar a função e imprimir o valor
console.log(getUser("Diego", "Max"))

// Criar a função para receber duas variáveis do tipo number e retornar um number
function getSpeed(current: number, add: number): number{
    return current + add
}
// Chamar a função e imprimir o valor
console.log(getSpeed(9,3))

// Criar a função para receber duas variáveis do tipo number e retornar boolean
function getSituation(current: number): boolean {
    return (current >=7 ? true : false)
}
// Chamar a função e imprimir o valor
console.log(getSituation(9))