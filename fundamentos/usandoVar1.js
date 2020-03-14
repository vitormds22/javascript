{ 
    { 
        { 
            { 
                var sera = "Sera???"
                /* 
                    O tipo de varivael é acessível em qualquer parte do código 
                    que não seja uma função, ou seja 
                    ESCOPO GLOBAL
                */
                console.log(sera)
            } 
        } 
    } 
}
/* 
    Falando um pouco sobre escopo de variaveis,
    O escopo delimita aonde a variavel é visivel, 
    onde podemos ou não chamar essa variavel no codigo
*/
console.log(sera)

function testeEscopo(){
    var escopo = 'Está dentro função!'
    console.log(escopo)
}
/*
    A instância var não nos permite acessar as variaveis
    QUANDO ESTÃO DENTRO DE FUNÇÕES
*/
// console.log(escopo)

/* 
    window é um objeto que está dentro do navegador 
    que pertence e retém tudo que está em uma janela,, 
    a não ser que esteja em uma função,
    ou seja,
    ESCOPO GLOBAL
*/
//Declarando então, 
var a = 123
// Podemos acessar pelo objeto window
// window.a