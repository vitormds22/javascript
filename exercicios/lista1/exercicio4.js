/* 04) ​ Crie uma função que irá receber dois valores, 
o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

const divisaoEResto = (dividendo1, dividendo2) => {
    const resultado = dividendo1 / dividendo2
    const resto = dividendo1 % dividendo2
    
    console.log(`O resultado da divisão é: ${resultado}. O resto da divisão é: ${resto}`)
}

divisaoEResto(3,2)