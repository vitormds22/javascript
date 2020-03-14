//SOBRE ATRIBUIÇÃO DE VALOR
console.log(`
Atribuições
===========`)
const a = {name: 'Teste'}

//ATRIBUIÇÃO POR REFRÊNCIA
const b = a // Igualamos o endereço da constante b para a contante a, ou seja, ambas partilham o mesmo endereço

b.name = "Opa" // Sendo assim, alterando o valor a partir da const b alteramos também na const a

console.log(a)

//Cópia por valor, quando são tipos primitivos
let c = 3 // VALORES PRIMITIVOS

let d = c // Nesse caso não é feita a atribuição de referência e sim uma cópia do valor de c para d
d++ // Então o valor de D passa a ser único e apenas ele é incrementado
console.log(c)
console.log(d)

console.log('===============')
// SOBRE NULL E UNDEFINED
let valor
console.log(valor) //Undefined, não tem valor definido
// console.log(valor2) //Não definido, não foi declarada

valor = null // Ausência de valor, porém foi definida
console.log(valor)
// console.log(valor.toString()) // Estamos tentando acessar uma propriedade de algo que não existe, logo TYPEERROR em cima dele

const produto = {}
console.log(produto.preco) // UNDEFINED, dentro de produto não foi definido uma chave preco
produto.preco = 3.50
console.log(produto)

produto.preco = undefined //EVITE ATRIBUIR UNDEFINED, A LINGUAGEM FARÁ ISSO SOZINHO
console.log(!!produto.preco)
console.log(produto)


produto.preco = null // SEM PREÇO
console.log(!!produto.preco)
console.log(produto)