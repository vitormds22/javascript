function criarProduto(nome, preco, desconto = 2) {
    return {
        nome, 
        preco,
        desconto        
    }
}

function aplicarDesconto(obj) {
    return {
        nome: obj.nome,
        preco: obj.preco -= obj.desconto,
        desconto: obj.desconto 
    }
}

let camisa = criarProduto('Camisa', 45)
let bermuda = criarProduto('Bermuda', 20, 10)
console.log()
console.log(aplicarDesconto(camisa))
console.log(aplicarDesconto(bermuda))