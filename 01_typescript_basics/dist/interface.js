"use strict";
// Criar a função para receber uma variável do tipo User (objeto) e não retornar valor
function printUser(user) {
    console.log(`Nome do usuário: ${user.name}, Velocidade do usuário: ${user.speed}`);
}
// Criar o objeto de dados
let dataUser = {
    name: "Diego",
    speed: 12
};
printUser(dataUser);
