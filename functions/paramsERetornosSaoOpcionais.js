function area(largura, altura) {
    const area = largura * altura

    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return console.log(`Valor da area é: ${area}m2.`)
    }
}

console.log(area(2,3))