/*Interpretação de codigo
resultado a = false
resultado b = false
resultado c = true
resultado d = boolean


//2 PARTE
 Ha a junção dos dois valores que o usuario coloca no prompt
3 PARTE
    Tem que determinar o valor NUMBER para as duas constantes, senao ele entende que elas sao uma Sting

*/
//ESCRITA DE CODIGO
const nome = prompt ("QUAL SEU NOME?")
const idade = Number ( prompt("QUAL SUA IDADE?"))
const idadeAmigo = Number ( prompt ("QUAL A IDADE DO SEU MELHOR AMIGO?"))
const Maisvelho = idade>idadeAmigo

console. log ("Nome" , nome)
console. log ("Idade" , idade)
console. log ("Idade Melhor Amigo" ,  idadeAmigo)
console.log ("SUA IDADE É MAIOR QUE A DO SEU AMIGO?", Maisvelho)

//PARTE 2
const par = Number (prompt (" Insira um numero par"))
const resto = par % 2
// O resto dessa variavel é sempre = 0
// No numero impar o resto é sempre = 1

console.log (par , resto )


//PARTE 3
const idade2 = idade
const idadeMeses = idade2 * 12
const idadeDias = idade2 * 365
const idadeHoras = idade2 * 8766

console.log (idadeMeses , "MESES")
console.log (idadeDias , " DIAS")
console.log ( idadeHoras , "HORAS")

 
//PARTE 4
const comparaçao = Number (prompt ("Me diga um numero"))
const comparaçao2 = Number (prompt ("Me diga outro numero"))
const maiorq = comparaçao > comparaçao2
const igaual = comparaçao === comparaçao2
const divisível = comparaçao / comparaçao2
const divisível1 = comparaçao2 / comparaçao

console.log ("nº1", comparaçao)
console.log ("nº2", comparaçao2)
console.log ("O primeiro numero é maior que segundo?" , maiorq)
console.log ("O primeiro numero é igual ao segundo?" , igaual )
console.log ("O primeiro numero é divisível pelo segundo?" , divisível)
console.log ("O segundo numero é divisível pelo primeiro?" , divisível1)