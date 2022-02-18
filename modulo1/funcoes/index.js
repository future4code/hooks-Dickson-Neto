//INTERPRETAÇÃO DE CODIGO
//ira multiplicar os valores no primeiro consolo:10 ; no segundo console:50
//dara um erro e nao sera impresso nada no console

//2 parte
//ira retornar um booleano
//i-true
//ii-true
//iii true

//ESCREVENDO CODIGO
function meuNome() {
     ("Eu sou Dickson, Tenho 23 anos, moro em Recife")
}
console.log (meuNome)

//B


function TesteUsuario(nome , idade , cidade , profissao){
 
    console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e trabalho com ${profissao}.`)
}

TesteUsuario("Lais", "23", "Sao Paulo", "Instrutora")

//Parte 2
function soma(num1 , num2){
    return num1 + num2
    
}
console.log (soma(10 , 20))

//B
function maiorIgual(num1 , num2){
    return num1 >= num2
}
console.log (maiorIgual(10 ,20))

//C
function diferença (num1){
const resto = num1 / 2
console.log ("TRUE = PAR / FALSE = IMPAR " , resto === 0)

}
diferença (2)


//D
function imprimirMensagem(){
const mensagem = prompt ("DIGITE ALGO")
console.log (mensagem.toUpperCase() , mensagem.length)
}
imprimirMensagem()



 //3 PARTE

 const valores = Number (prompt ("ME DIGA UM NUMERO 1/2"))
 const valores2 = Number (prompt ("ME DIGA UM NUMERO 2/2"))

 function somar (val1 , val2){
     val1 = valores
     val2 = valores2
     const somar = val1 + val2
     console.log ("A soma é :" ,  somar)
 }
 somar()

 function multiplicar (mul1 , mul2){
     mul1 = valores
     mul2 = valores2
     const mul = mul1 * mul2
     console.log ("A multiplicação é :",  mul)
 }
 multiplicar()

 function dividir (div1 , div2){
    div1 = valores
    div2 = valores2
    const div = div1 / div2
    console.log ("A divisao é:" ,  div)
}
dividir()

function diferença2 (dif1 , dif2){
    dif1 = valores
    dif2 = valores2
    const dif = dif1 / dif2
    console.log ("A diferença entre os valores é:", dif)
}
diferença2()