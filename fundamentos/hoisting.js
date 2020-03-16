//O javascript declara a variavel antes sendo que deveria retornar com not defined
//var a
//isso se chama hoisting, içamento, jogar para cima para que a variavel esteja no escopo
console.log("a = ", a)
var a = 2
console.log("a = ", a)

// O efeito de hoisting não ocorre quando é declarado com let
console.log("b = ", b)
let b = 2
console.log("b = ", b)
