//Função em JS é First-Class Objects (Citizens)
//Higher-order funciton

//criar de forma literal
function fun1(){ 
    //retorno é opcional, se não retornar nada vem undefined
}

// Armazenar um function numa variavel

const fun2 = function () { } //Função anonima

// Armazenar uma function num array

const array = [ function(a, b) { return a + b}, fun1, fun2 ]

console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Opa'}

console.log(obj.falar())

//Passar função como paramêtro

function run(fun){
    fun()
}

run(function(){console.log('Executando função por param')})

//Função por retornar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)