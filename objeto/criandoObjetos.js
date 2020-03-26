//Usando a notação literal, não confundir sobre json
const obj1 = {}

//Object em JS -> A partir de uma função construtora
console.log(typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)

// Funções construtoras personalizada.
function Produto(nome, preco, desconto){
    // Preco ou desconto são atributos encapsulados, valores constantes e não são disponiveis para fora do objeto. Private
    this.nome = nome // Atributo publico

    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory => Padrão de projeto
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna um Objeto...
const fromJSON = JSON.parse('{""info":"Sou um JSON"}')
console.log(fromJSON.info)