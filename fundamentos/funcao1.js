//Função sem retorno
console.log(`
Função sem retorno
==================`)
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) //Dessa forma estamos passando os parâmetros e a função e executada normalmente

//Passando dessa forma a função ainda é executada, porém não como o esperado retornando um NaN
imprimirSoma(2) 

/*
Podemos também passar vários parâmetros,
porém tudo que não estiver no escopo inicial da função
será ignorado
*/
imprimirSoma(2,10,4,5,6,7,8)

//Ou até mesmo não passar parametro algum, retornando tb um NaN
imprimirSoma()

//Função com retorno
function soma(a, b = 1){ //Variável b tem como valor padrão 1
    return a + b
}
console.log(`
Função com retorno
==================`)
console.log(soma(2, 3))
console.log(soma(2)) //Dessa forma é utilizado o valor padrão do segundo parâmetro