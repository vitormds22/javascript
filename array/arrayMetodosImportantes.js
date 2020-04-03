const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Massa quebrou o carro! -> Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona um elemento no array
console.log(pilotos)

pilotos.shift() // Remove da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento na primeira posição
console.log(pilotos)

// Splice, pode tanto adicionar como remover
//Add
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3,1) // Massa quebrou denovo
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2) // Retorna um novo array, pegando apartir do indice informado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // Retorna um novo array, pegando apartir do indice informado
console.log(algunsPilotos2)