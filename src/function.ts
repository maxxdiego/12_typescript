console.log("Como criar função");

// Criar a função para receber duas variáveis do tipo string e retornar a string
function getUser(name: string, lastname: string){
    return `${name} ${lastname}`
}
// Chamar a função
console.log(getUser("Diego", "Max"))