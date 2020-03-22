class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Vitor')
p1.falar()

// Existe uma vantagem em utilizar, quando executado no browser o this é melhor refereciado
// No caso acima isso o retorno de nome, ao clicar no body, será undefined
// Já a factory o nome é retornado como o esperado
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Vitor')
p2.falar()