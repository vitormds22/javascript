// Armazenando função em uma variavel
/* 
    Aqui criamos uma função anonima, ou seja, 
    sem o nome
*/
const imprimirSoma = function(a ,b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel 
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

/* 
    É possivel reduzir ainda mais a sintaxe,
    Utilizando o retorno implícito na sequência da arrow function
*/
// caso tenha apenas um parametro, const add = a => a++
const subtracao = (a, b) => a - b
console.log(subtracao(2,3))

const imprimir = a => console.log(a)
imprimir("Legal!!")