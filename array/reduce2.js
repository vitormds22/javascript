const alunos = [
    { nome:'João', nota: 7.3, bolsista: false},
    { nome:'Maria', nota: 8.8, bolsista: true},
    { nome:'Pedro', nota: 10, bolsista: false},
    { nome:'Ana', nota: 9.5, bolsista: true},
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
