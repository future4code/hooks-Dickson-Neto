//ATIVIDADE INTERPRETAÇÃO DE CODIGO
// 1-O que o código abaixo está fazendo? Qual o resultado impresso no console? 
//     Ele vai somando o resultado a variavel valor, ate que o i seja menor q 5, o resultado impresso no console sera 10

// a) O que vai ser impresso no console?
//     19,21,23,25,27,30

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
//     Sim, mas tera que fazer um indice para que fosse possivel acessar a posição do array


// 3. Qual seria o resultado impresso no console, se o usuario digitasse o numero 4?
//     iriam aparecer 4 linhas no console, cada uma somando um asteristico

//EXERCICIO ESCRITA DE CODIGO
//1 PARTE
// let bichosDeEstimação = Number(prompt("Quantos bichos de estimação voce tem?"))
// let nomeAnimaisEstimação = []

// if (bichosDeEstimação === 0 ){
//     console.log("Que pena! Você deveria adotar um")
// }else if (bichosDeEstimação > 0){
//     for(let i= 0; i < bichosDeEstimação; i++){
//         nomeAnimaisEstimação.push(prompt("Qual o nome do seu pet?"))
//     }
// }
// console.log(nomeAnimaisEstimação)

//2 PARTE

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// // A- Escreva um programa que imprime cada um dos valores do array original.
// for(numeroArray of arrayOriginal){
//     console.log(numeroArray)
// } 


// // B-Escreva um programa que imprime cada um dos valores do array original divididos por 10
//   for(let i = 0 ; i< arrayOriginal.length; i++){
//     console.log(` ${arrayOriginal[i]/10}`)
//   }


// // C - Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
 
  // for(novoArray of arrayOriginal){
  //     if(novoArray % 2 === 0){
  //       console.log(novoArray)
  //     }
  // }

//  // D- Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.
//     for(let i = 0; i<arrayOriginal.length; i++){
//       console.log(`O elemento do index ${i} é ${arrayOriginal[i]}`)
//     }

//E - Escreva um programa que imprima no console o maior e o menor números contidos no array original
// let maiorNumero = arrayOriginal[0]
// let menorNumero =  arrayOriginal[0]

// for(let i of arrayOriginal){
//   if( i > maiorNumero){
//     maiorNumero = i
//   }else if ( i < menorNumero){
//     menorNumero = i
//   }
// }


// console.log (maiorNumero)
// console.log(menorNumero)

// //FEITO NO PLANTAO
// function imprimirNumeros(array){
//   let maiorNumero = array[0]
//   let menorNumero = array[0]

//   for (let i=0 ; i <array.length; i++){

//     if(array[i]> maiorNumero){
//       maiorNumero = array[i]

//     }else if(array[i] < menorNumero){
//       menorNumero = array[i]
//     }
//   }
//   console.log(`Maior Numero é: ${maiorNumero} e o menor numero é: ${menorNumero}`)
// }

// imprimirNumeros(arrayOriginal)


//DESAFIO

// const jogador1 = Number(prompt(`Vamos Jogar!!\nEscolha um numero`))
// const jogador2 = Number(prompt("Advinhe o numero do JOGADOR 1"))

// if(jogador2 < jogador1 ){
//   console.log("Erooooou, tente outra vez\nColoque um numero maior")
// }else if (jogador2 > jogador1){
//   console.log("Nao foi dessa vez, tente denovo\nColoque um numero menor!")
// }else if(jogador2 = jogador1){
//   console.log( "Ate que fim , voce ACERTOOOOOU!!")
// }

