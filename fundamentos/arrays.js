const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0] , valores[3]) // Acessando as posições dos arrays
console.log(valores[4]) // Acessando um indice que não existe retorna um undefined

valores[4] = 10
// valores[56] = 9 // Pulando um indice do array
valores[5] = 9 // Pulando um indice do array
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //Função de inserção de valores em um array
console.log(valores)

console.log(valores.pop()) //Retorna o ultimo valor do array e remove do array
delete valores[0]
console.log(valores)

console.log(typeof valores) //Object