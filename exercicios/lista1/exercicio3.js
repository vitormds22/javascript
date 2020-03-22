/*03) Crie uma função que recebe dois parâmetros, 
base e expoente, e retorne a base elevada ao expoente. */

const potenciacao = (base, expoente) => {
    for(let i = 0; i <= expoente; i++){
        console.log(base *= base)
        break
    }
}

potenciacao(6,2)