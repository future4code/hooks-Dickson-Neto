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
 let numPar = []
 for(let i = 0 ; numPar.length < n; i++){
     if(i % 2 === 0){
         numPar.push(i)
     }
 }return numPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA === ladoB && ladoB === ladoC && ladoA === ladoC){
    return "Equilátero"
} else  if  ( ladoA  !== ladoB  &&  ladoB  !==  ladoC  &&  ladoC  !== ladoA )  {
    return  "Escaleno";
 }else {
    return  "Isósceles" ;
}
}


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {


}
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`


}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const anonimato = {...pessoa, nome:"ANÔNIMO"}
   return anonimato
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
 const alturaOk = 1.5
const idadeMinima = 14
const idadeMaxima = 60

let autorizado = pessoas.filter((item)=>{
    return !(item.altura < alturaOk || item.idade <= idadeMinima || item.idade > idadeMaxima)
})
return autorizado
}
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
const alturaOk = 1.5
const idadeMinima = 14
const idadeMaxima = 60

let naoAutorizado = pessoas.filter((item)=>{
    return item.altura < alturaOk || item.idade <= idadeMinima || item.idade > idadeMaxima
})
return naoAutorizado
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    let somando = 0
    let novoValor = 0
// somar array
for(let i=0 ; i < contas.length; i++){
    for(let somaCompras = 0 ; somaCompras < contas[i].compras.length; somaCompras++){
        somando += contas[i].compras[somaCompras]
        novoValor = contas[i].saldoTotal - somando;
        contas[i].saldoTotal = novoValor;
        somando=0
        }   
        contas[i].compras=[]
    }
    return contas
}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let ordemAlfabetica = consultas.sort((function compare(a , b){
      if(a.nome < b.nome){
          return -1
      }else if(a.nome > b.nome){
          return 1
      }else{
          return 0
      }
  }))
  return ordemAlfabetica
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}