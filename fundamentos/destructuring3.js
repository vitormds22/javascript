function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({min : 955}))
console.log(rand({})) // Valores padrões da função entre 0 e 1000
console.log(rand()) // Não é possível desestruturar undefined ou null, gera erro