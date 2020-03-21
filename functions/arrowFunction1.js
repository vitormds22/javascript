let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //função de uma linha, sabendo que o retorno já está implícito

console.log(dobro(Math.PI))

let ola = function (){
    return 'Olá!'
}

ola = () => 'Olá!' // Sem parâmetro
ola = _ => 'Olá!' // Sem parâmetro

console.log(ola())