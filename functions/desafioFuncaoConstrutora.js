function Pessoa(nome, idade, sexo) {
    this.nome = nome
    this.idade = idade
    this.sexo = sexo

    this.apresentacao = function(){
        console.log(`Meu nome é ${nome}, tenho ${idade} e sou do sexo ${sexo}`)
    }
}

let vitor = new Pessoa('Vitor', 22, 'masculino')

vitor.apresentacao()