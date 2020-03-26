// objeto endereçado na memória
// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'

console.log(pessoa)

//Tentando endereçar o objeto novamente
// pessoa -> 456 -> {...} 
// pessoa = {nome: 'Ana'}

//congelar o objeto significa que o objeto será inutilizado
Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

// Criando um objeto inalterável, até mesmo seus valores
const pessoaConstante = Object.freeze({ nome: 'João'})

console.log(pessoaConstante)