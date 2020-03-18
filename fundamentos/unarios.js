let num1 = 1 
let num2 = 2

num1++ //Pós fixada, acrescenta 1 a variavel
console.log("Número 1 ++ :", num1)

--num1 //Pre fixada, decrementa 1 a variavel. Faz com prioridade maior que a de cima
console.log("Número 1 -- :",num1)

console.log(++num1 === num2--)
console.log(num1 === num2)