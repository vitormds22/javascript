const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Lapis", "preco": 2.5}',
    '{"nome": "Camisa", "preco": 5}',
    '{"nome": "Caneta", "preco": 6}'
]

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObj).map(apenasPreco)
console.log(resultado)