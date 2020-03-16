//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//Forma moderna de acessar atributos chaves dentro de um objeto
const { nome, idade } = pessoa
console.log(nome, idade)

//Podemos atribuir apelidos para eles
const { nome: n, idade: i } = pessoa
console.log(n, i)

// E até mesmo tentar acessar atributos inexistente e criar valores padrões para eles
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

// É possível também acessar valores internos de forma mais simple
const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)

//Caso tente acessar parametros que não existam o codigo gerara um erro.
const { conta: {ag, num }} = pessoa
console.log(ag, num)