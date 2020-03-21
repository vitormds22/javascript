console.log(soma(3,4))
// declaração de função padrão
//dessa forma acontece o hosting, eleva a a função sendo possível chamar antes da declaração
function soma(x,y){
    return x + y
}

//Expressão de função - function expression
//Já essa não é possivel utilizar do hosting
const sub = function(x,y){
    return x - y 
}

//named function expression - uso reduzido
//Já essa também não é possivel utilizar do hosting
const mult = function mult(x, y) {
    return x * y
}