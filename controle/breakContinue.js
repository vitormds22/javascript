const nums = [1,2,3,4,5,6,7,8,9,10]
console.log(`
BREAK
========`)
for(let x in nums) {
    if (x == 5){
        break //BREAK PAARRAAAA TUDOOOOO
    }
    console.log(`${x} = ${nums[x]}`)
}
console.log(`
CONTINUE
========`)
for(let y in nums) {
    if (y == 5){
        continue // continue pula a condição mostrada na condição
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: // Atribuição de um nome para o laço for, rótulo
for (a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}