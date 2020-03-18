const imprimirResultado = function(nota){
    if(nota >= 7)
        console.log('Aprovado!')
    else 
        console.log('Reprovado!')
    
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') //Deveria ser tratado, fracamente tipado causa esse tipo de problema