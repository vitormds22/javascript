const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

aprovados.forEach2(function(nome, indice, array){
    console.log(`${indice + 1}: ${nome}`)
    console.log(array)
})
// const forEach2 = (array) => {
//     for(nome in array){
//         console.log(array[nome])
//     }
// }

// forEach2(aprovados)