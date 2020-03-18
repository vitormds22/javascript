function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // Trabalho1 ou Trabalho2
    const comprarTv50 = trabalho1 && trabalho2 // Trabalho1 E Trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // Diferença simula o XOR
    const manterSaudavel = !comprarSorvete

    return {
        comprarSorvete,
        comprarTv50,
        comprarTv32,
        manterSaudavel
    }
}

console.log(`
TRUE E TRUE
===========`)
console.log(compras(true, true))

console.log(`
TRUE E FALSE
===========`)
console.log(compras(true, false))

console.log(`
FALSE E TRUE
===========`)
console.log(compras(false, true))

console.log(`
FALSE E FALSE
===========`)
console.log(compras(false, false))