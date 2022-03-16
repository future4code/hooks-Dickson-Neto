// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let novoArray = array
    novoArray.sort((a,b)=> a - b)
    return novoArray

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numPar = []
    for(pares of array){
        if ( pares % 2 === 0){
             numPar.push(pares);
        }
    }
    return numPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
        let numPar = []
        for(pares of array){
            if ( pares % 2 === 0){
                 numPar.push(pares ** 2);
            }
        }
        return(numPar)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNum = 0
  for(let i = 0; i < array.length; i++){
      if(array[i] > maiorNum){
          maiorNum = array[i]
      }
    
  }return maiorNum

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numMaior;
    let numMenor;
    if(num1 > num2){
        numMaior = num1
        numMenor = num2
    }else{
      numMaior = num2
      numMenor = num1
    }
dividirMenorNum = maiorNum = numMaior % numMenor === 0
const diferencaNum = numMaior - numMenor

return {
    maiorNumero : numMaior,
    maiorDivisivelPorMenor : dividirMenorNum,
    diferenca : diferencaNum
}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}