function teste1(num){

    if(num > 7)
        console.log(num)

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { //ERRADO, NÃO USA PONTO E VIRGULA AQUI CARA
        console.log(num)
    }
}
teste2(6)
teste2(8)