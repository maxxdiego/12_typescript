// Usar interface para definir a estrutura do objeto
interface User {
    name: string;
    speed: number;
}

// Criar a função para receber uma variável do tipo User (objeto) e não retornar valor
function printUser(user: User) : void{
    console.log(`Nome do usuário: ${user.name}, Velocidade do usuário: ${user.speed}`);
}

// Criar o objeto de dados
let dataUser: User = {
    name: "Diego",
    speed: 12
}

printUser(dataUser);