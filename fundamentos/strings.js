const escola = "Cod3r"

console.log(escola.charAt(4)) // Retorna o valor do caracter que se encontra na posição do parenteses

console.log(escola.charAt(5)) // Fora do array, não retorna valor

console.log(escola.charCodeAt(3)) // Retorna o valor da na tabela ascii

console.log(escola.indexOf('3')) // Retorna o numero do indice do parametro informado dentro da função

console.log(escola.substring(1)) // imprime a string sem o indice informado
console.log(escola.substring(0,3)) // intervalo que será retornado no console]

console.log('Escola '.concat(escola).concat("!")) //Para juntar strings!
console.log('Escola ' + escola + "!") //Para juntar strings!

console.log(escola.replace(3,'e')) //Substitui o valor informado no primeiro parametro pelo segundo parametro 

console.log('Ana,Maria,Pedro'.split(',')) // Gera um array apartir de uma String