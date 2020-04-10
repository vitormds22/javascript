const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})

app.get('/produtos', (req, res) => { // Middleware de requisição get do express
    res.send(db.getProdutos) // converter para json
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = db.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = db.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})