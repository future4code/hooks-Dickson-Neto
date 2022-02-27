// INTERPRETAÇÃO DE CODIGO
/* 1a)Explique o que o código faz. Qual o teste que ele realiza? 
    Ele pergunta ao usuario um numero, e faz o resto desse numero por 2
b) Para que tipos de números ele imprime no console "Passou no teste"? 
    Para numeros que tenham como resultado o resto igual a 0
c) Para que tipos de números a mensagem é "Não passou no teste"?
    Para numeros que o resultado do resto nao seja igual a 0

    2a) Para que serve o código acima?
    Serve para o usuario saber as frutas que estao sendo 
    vendidas e o seu preço
b)  Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
    Preço = 2,25
c)  Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
    Preço = 5.5
    Preço = 5

3a) O que a primeira linha está fazendo?
    Perguntando ao usuario um numero
b)  Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    10 = "Esse numero passou no teste"
    -10 = "Nao ira mostrar nada no console"]
c)  Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    Havera um erro quando o usuario digitar um numero menor que 0, o escopo de linha da mensagem nao ira identificar o valor,e nao ira mostrar nada no console
*/
  
//ESCRITA DE CODIGO
//1 PARTE

/*const maiorIdade = Number(prompt("Qual a sua idade?"))
const podeDirigir = maiorIdade >= 18

if(podeDirigir){
    console.log ("Voce pode dirigir")
} else{
    podeDirigir < 18
    console.log ("Voce nao pode dirigir")
}

// PARTE 2 

const turnoEstudo = prompt ("Em qual turno voce estuda? Matutino (M) , Vespertino (V) ou Noturno (N)")

if (turnoEstudo.toUpperCase() === "M"){
    console.log ("Bom dia")
}else if(turnoEstudo.toUpperCase() === "V"){
    console.log ("Boa Tarde")
}else if (turnoEstudo.toUpperCase() === "N"){
    console.log ("Boa Noite")
}


//PARTE 3
const turnoEstudo = prompt ("Em qual turno voce estuda? Matutino (M) , Vespertino (V) ou Noturno (N)")
console.log (turnoEstudo)

switch(turnoEstudo){
    case "M":
        console.log ("Bom dia")
    break
    case "V":
        console.log ("Boa Tarde")
    break
    case "N" :
        console.log ("Boa noite")
    break
    default:
        console.log ("Va estudar, URGEEEENTE!!")
}

// PARTE 4
const Filme = prompt ("Qual o tipo do filme? FANTASIA , TERROR OU AÇÃO?")
const preço = Number(prompt("Qual o valor do filme"))

if(Filme.toUpperCase() === "FANTASIA" && preço <= 15 ){
    console.log("Bom Filme")
}else{
    console.log ("Escolha outro filme")
}

//DESAFIO
const Filme = prompt ("Qual o tipo do filme? FANTASIA , TERROR OU AÇÃO?")
const preço = Number(prompt("Qual o valor do filme"))

if(Filme.toUpperCase() === "FANTASIA" && preço <= 15 ){
   const lanche = prompt ("Qual Lanche vc vai levar? Chocolate ,  Pipoca ou Batata")
    console.log("Bom Filme")
    console.log (`Aproveite o seu ${lanche}`)
}else{
    console.log ("Escolha outro filme")
}
*/

//DESAFIO 2
const nomeUsuario = prompt ("Qual o seu nome?")
const tipoJogo = prompt("Qual o tipo do jogo? Internacional (IN) OU Domestico (DO)?")
const etapaJogo = prompt ("Qual a etapa do jogo? Semi-Final (SF), DISP 3º Lugar (DT) ou Final (FI)")
const categoria = prompt ("Categoria 1 , 2 , 3 ou 4?")
const quantidadeIngresso = Number( prompt("Qual a quantidade de ingressos?"))
let ValorIngresso;
let ValorTotal

const comprovanteVenda = {
    nome: nomeUsuario.toUpperCase(),
    tipo: tipoJogo.toUpperCase(),
    etapa: etapaJogo.toUpperCase(),
    categoriaJogo: categoria,
    quantidadeIngresso:quantidadeIngresso

}
function imprimirIngresso(comprovanteVenda) {
    if(comprovanteVenda. tipo === "DO"){
        ValorTotal = ValorIngresso * quantidadeIngresso
    }else {
        ValorTotal = (ValorIngresso * 4.10) * quantidadeIngresso
    };
    console.log ("---Dados da Compra---")
    console.log(`Nome do cliente: ${comprovanteVenda.nome}`);
    if(comprovanteVenda.tipo === "DO"){
        console.log("tipo do jogo : CASA")
    }else if (comprovanteVenda.nome){
        console.log ('Tipo do jogo : Fora')
    }
    console.log("---Valor Ingresso---")
    console.log (`Valor Ingresso : R$ ${ValorIngresso}`)
    console.log(`Valor Total : R$ ${ValorTotal}`)
}

switch(comprovanteVenda.tipo){
    case "DO" :
        switch(comprovanteVenda.etapa){
            case "SF":
                switch(comprovanteVenda.categoriaJogo){
                    case "1" :
                        ValorIngresso = 1,320 ; 
                        imprimirIngresso(comprovanteVenda)
                        break;
                    case "2" :
                        ValorIngresso = 880 ; 
                        imprimirIngresso(comprovanteVenda)
                        break;
                    case "3" :
                        ValorIngresso = 550 ; 
                        imprimirIngresso(comprovanteVenda)
                        break; 
                    default :
                    ValorIngresso = 220 ; 
                        imprimirIngresso(comprovanteVenda)
                        break;
                }
        
            case "DT" :
                switch(comprovanteVenda.categoriaJogo){
                    case "1" :
                        ValorIngresso = 550 ; 
                        imprimirIngresso(comprovanteVenda)
                        break;
                    case "2" :
                        ValorIngresso = 440 ; 
                        imprimirIngresso(comprovanteVenda)
                        break;
                    case "3" :
                        ValorIngresso = 330 ; 
                        imprimirIngresso(comprovanteVenda)
                        break;
                    default :
                    ValorIngresso = 170 ; 
                        imprimirIngresso(comprovanteVenda)
                        break;
                }
            case "FI" :
                switch(comprovanteVenda.categoriaJogo){
                    case "1" :
                        ValorIngresso = 1980 ; 
                        imprimirIngresso(comprovanteVenda)
                        break;
                    case "2" :
                        ValorIngresso = 1320 ; 
                        imprimirIngresso(comprovanteVenda)
                        break;
                    case "3" :
                        ValorIngresso = 880 ; 
                        imprimirIngresso(comprovanteVenda)
                        break;
                    default :
                    ValorIngresso = 330  ; 
                        imprimirIngresso(comprovanteVenda)
                        break;
                }break
        }break
    case "IN" :
        switch(comprovanteVenda.etapa){
            case "SF":
                switch(comprovanteVenda.categoriaJogo){
                    case "1" :
                            ValorIngresso = 1,320 ; 
                            imprimirIngresso(comprovanteVenda)
                            break;
                     case "2" :
                            ValorIngresso = 880 ; 
                            imprimirIngresso(comprovanteVenda)
                            break;
                    case "3" :
                            ValorIngresso = 550 ; 
                            imprimirIngresso(comprovanteVenda)
                            break; 
                    default :
                        ValorIngresso = 220 ; 
                            imprimirIngresso(comprovanteVenda)
                            break;
                    }
            
                case "DT" :
                    switch(comprovanteVenda.categoriaJogo){
                        case "1" :
                            ValorIngresso = 550 ; 
                            imprimirIngresso(comprovanteVenda)
                            break;
                        case "2" :
                            ValorIngresso = 440 ; 
                            imprimirIngresso(comprovanteVenda)
                            break;
                        case "3" :
                            ValorIngresso = 330 ; 
                            imprimirIngresso(comprovanteVenda)
                            break;
                        default :
                        ValorIngresso = 170 ; 
                            imprimirIngresso(comprovanteVenda)
                            break;
                    }
                case "FI" :
                    switch(comprovanteVenda.categoriaJogo){
                        case "1" :
                            ValorIngresso = 1980 ; 
                            imprimirIngresso(comprovanteVenda)
                            break;
                        case "2" :
                            ValorIngresso = 1320 ; 
                            imprimirIngresso(comprovanteVenda)
                            break;
                        case "3" :
                            ValorIngresso = 880 ; 
                            imprimirIngresso(comprovanteVenda)
                            break;
                        default :
                        ValorIngresso = 330  ; 
                            imprimirIngresso(comprovanteVenda)
                            break;
                    }break
            }break
      
}