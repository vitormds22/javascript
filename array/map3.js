Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Lapis", "preco": 2.5}',
    '{"nome": "Camisa", "preco": 5}',
    '{"nome": "Caneta", "preco": 6}'
]

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObj).map2(apenasPreco)
console.log(resultado)