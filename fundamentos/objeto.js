const prod1 = {} //Chave valor
prod1.nome = "Celular Ultra Mega"  //Pode criar valores dentro do objeto dessa forma
prod1.preco = 4998
// prod1['Desconto legal'] = 0.40 // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 79.80,
    obj: {
        param: 1,
        obj: {
            param2: 2
        }
    }
}

console.log(prod2)