const alunos = [
    { nome:'João', nota: 7.3, boslsista: false},
    { nome:'Maria', nota: 8.8, boslsista: true},
    { nome:'Pedro', nota: 10, boslsista: false},
    { nome:'Ana', nota: 9.5, boslsista: true},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)