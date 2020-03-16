//Math é um objeto e acessamos o metodo ceil para arredondar para cima
console.log(Math.ceil(6.1)) //A notação ponto já existe aqui mesmo nessa linha

const obj1 = {}
obj1.nome = "Bola"

console.log(obj1.nome)

function Obj(nome){
    //this faz ficar visivel fora do escopo da função
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

//Com o ponto pode se acessar tanto atributos como funções de um objeto
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()