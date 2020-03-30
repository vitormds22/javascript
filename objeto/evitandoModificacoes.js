// Object.preventExtensions - Pode alterar, pode excluir, não pode incluir
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.desc = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal - Não adiciona, não exclui mas pode modificar
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)

console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes => Não modifica em nada
