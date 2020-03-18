console.log('01)', '1' == 1) //Dois iguais comparam a igualdade das coisa 
console.log('02)', '1' === 1) //Compara até tipo, string, int ou bool
console.log('03)', '3' != 3) // Diferente
console.log('04)', '3' !== 3) //ESTRITAMENTE DIFERENTE, até tipo

console.log('05)', 3 < 2) //Menor que
console.log('06)', 3 > 2) //Maior que
console.log('07)', 3 <= 2) //Menor  ou igual
console.log('08)', 3 >= 2) //Maior ou igual

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)' , d1 === d2)
console.log('10)' , d1 == d2)
console.log('11)', d1.getTime() == d2.getTime()) // Mesmo tipo e mesmo valor

console.log('12)', undefined == null)
console.log('13)', undefined === null)