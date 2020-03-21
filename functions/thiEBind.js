const pessoa =  {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
        // console.log(this)
    }
}

pessoa.falar()

const falar = pessoa.falar 
falar() // Gerou um conflito de paradigma, onde o this não referencia mais o objeto em si. FUNCIONAL E OO

//Para resolver isso usamos a função bind para referenciar o this ao objeto
const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()