function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4600,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log('Preço com variaveis globais: ',getPreco())
console.log(produto.getPreco())

const car = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(car))
console.log(getPreco.apply(car))

console.log(getPreco.call(car, 0.17, 'R$'))

//A diferença entre ambos é que os parametros do apply são passador por array
console.log(getPreco.apply(global, [0.17, 'R$']))