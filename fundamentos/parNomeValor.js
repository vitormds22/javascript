const saudacao = "Olá" //Contexto léxico 1
//Contexto da palavra em relação ao que está no código
function exec() {
    const saudacao = "Eai" //Contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de par nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 30,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Maneria',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)