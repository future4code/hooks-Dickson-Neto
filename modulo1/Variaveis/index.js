/*Interpretação de codigo
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
// console.log (b)= 10
// console.log (a b) = 10 , 5


let a = 10
let b = 20
c = a
b = c
a = b

console.log ( a , b , c)
// console.log (a , b, c)= 10,10,10


let p= prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
 // p- TrabalhoHora t-ValorDia

*/

//ESCRITA CODIGO- PART 1
let nome = prompt("QUAL SEU NOME?")
let idade = prompt ("QUAL SUA IDADE?")

console.log (typeof "nome")
console.log (typeof "idade")
 //aparece ambas como string, pois ja é declarado automaticamente pelo typeof
 
console.log ( "OLA", nome ,"VOCE TEM", idade , "ANOS")  

//PARTE 2 EXERCICIO
let Azul = prompt("VOCE ESTA BEM?")
let Agua = prompt ("TOMOU AGUA HOJE?")
let exercicio = prompt ("VOCE FAZ EXERCICIO FISICO?")

console.log ( Azul )
console.log ( Agua )
console.log ( exercicio )


/* PARTE 3 DO EXERCICIO
let a = 10
let b = 25
let c 
c = a
a = b
b = c 

console.log (a , b , c)
*/

//DESAFIO
let numA = Number(prompt("Informe um valor A"))
let numB = Number (prompt("Informe um valor B"))

console.log (`o primeiro numero somado com o segundo numero é: ${numA + numB}`)
console.log (`o primeiro numero multiplicado pelo segundo é igual a: ${numA * numB}`)