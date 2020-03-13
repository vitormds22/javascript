let isAtivo = false
console.log(isAtivo) //Retorna false

isAtivo = true
console.log(isAtivo) //Retorna true

isAtivo = 1
console.log(!!isAtivo) //Forçando o valor a ser bool
console.log(!!true)
console.log(!false)

console.log('os verdadeiros...') // Sentenças não booleanas que se tornam verdadeiras nos contextos abaixo
//Forçando a conversão para bool
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar..')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Sem nome')