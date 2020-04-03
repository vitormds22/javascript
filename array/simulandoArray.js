const quaseArray = { 0: 'Rafa', 1: 'Ana', 2:'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.value(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafa', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)