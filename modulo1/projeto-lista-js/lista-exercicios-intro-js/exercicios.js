// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
 const altura = (prompt ( "Escreve a altura"))
 const larguraRetangulo = (prompt ("Escreva a largura"))
 const AreaRetangulo = ( altura * larguraRetangulo)
 console.log (AreaRetangulo)
  
  
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = prompt ("Qual o ano atual")
const anoNascimento = prompt ("Qual seu ano de nascimento")
 IdadeAtual = ( anoAtual - anoNascimento )
console.log (IdadeAtual)


}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  return peso / ( altura * altura )

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt (" Qual seu nome?")
const idade =  prompt ("Qual sua idade?")
const email = prompt ("Qual sua idade?")

console.log ( `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt ("1")
const cor2 = prompt ("2")
const cor3 = prompt ("3")
MinhasCores = [cor1 , cor2 , cor3]
console.log (MinhasCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const maiusculo = ( string )
const fraseMaiuscula = maiusculo.toUpperCase()
return fraseMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
valorEspetaculo = (custo / valorIngresso)
return valorEspetaculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

const comparação =  string1.length === string2.length
return comparação
 
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const meuArray = array
  return array [0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

const ultimo = array [ array.length -1]
return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
 const primeirovalor = array.shift()
 const ultimovalor = array.pop()
 const trocandovalor = array.push(primeirovalor)
 const trocandovalor2 = array.unshift(ultimovalor)

 return array
 

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const PrimeiraString =  string1.toLowerCase()
  const SegundaString = string2.toLowerCase()
  return PrimeiraString === SegundaString

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}