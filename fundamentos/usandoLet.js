// LET TEM ESCOPO DE FUNÇÃO, GLOBAL E DE BLOCO
// O ESCOPO DE BLOCO FAZ TODA A DIFERENÇA QUANDO SE TRATA DE SOBRESCRITA DE VARIAVEIS
// var numero = 1 
// {
//     //O Let é visivel apenas dentro de um bloco, ou seja, NÃO É GLOBAL
//     let numero = 2
//     console.log('dentro:',numero)
// }
// console.log('fora: ', numero)

/*
    Sempre busca a variavel no escopo menor, ou seja, 
    se não for enconstrada ele sai do escopo para encontrar
*/

let numero = 1 
{
    //O Let é visivel apenas dentro de um bloco, ou seja, NÃO É GLOBAL
    let numero = 2
    console.log('dentro:',numero)
}
console.log('fora: ', numero)
