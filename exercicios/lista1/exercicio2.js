/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function nomeiaTriangulo(lado1, lado2, lado3){
    const equilatero = (lado1 === lado2 && lado1 === lado3 && lado2 === lado3)
    const isosceles = (lado1 === lado2 && lado1 != lado3 || lado1 === lado3 && lado2 != lado3 || lado2 === lado3 && lado1 != lado3)

    if(equilatero){
        console.log('Esse triângulo é um Equilátero')
    } else if(isosceles){
        console.log('Esse triângulo é um Isósceles')
    } else {
        console.log('Esse triângulo é um Escaleno')
    }
}

nomeiaTriangulo(1,1,0)
