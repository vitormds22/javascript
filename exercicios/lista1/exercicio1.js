/*01) Crie uma função que dado dois valores 
(passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */
function Calculadora(operando1, operando2, operador = null){
    this.somar = null
    this.sub = null
    this.mult = null
    this.div = null
    this.operador = operador

    if(operador === "+"){
        this.somar = function(){
            return console.log(this.somar = operando1 + operando2)
        }
    } else {
        return console.log('Essa operação não é uma soma')
    }

    if(operador === "-"){
        this.subtrair = function(){   
            return console.log(this.sub = operando1 - operando2)
        }
    } else {
        return console.log('Essa operação não é uma subtração')
    }
}

const calculadora1 = new Calculadora(20, 30, "+")
calculadora1.somar()



function calcular(a = 0, b = 0, operador = null) {
    switch(operador){
        case '+':
            console.log(a + b)
            break
        case '-':
            console.log(a - b)
            break
        case '/':
            console.log(a / b)
            break
        case '*':
            console.log(a * b)
            break
        default:
            console.log('Operador inválido')
    }
}

// calcular(10,10,'*')
// calcular(10,10,'+')
// calcular(10,10,'-')
// calcular(10,10,'/')

