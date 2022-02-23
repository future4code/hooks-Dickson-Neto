//INTERPRETAÇÃO DE CODIGO

/*1A - (filme.elenco[0] = Matheus Nachtergaele )
    filme.elenco[filme.elenco.length - 1 = Virginia Cavendish
    console.log(filme.transmissoesHoje[2] = Canal : Globo, 14h
        */
/*Parte 2
console.log(cachorro)
    NOME: JUCA ; IDADE :3 ; RAÇA : Srd 
 console.log(gato) 
    vai pegar as mesmas variaveis da const cachorro, e vai mudar o nome de Juca , para Juba
console.log(tartaruga)
        vai pegar as variaveis que tem dentro da const gato, e mudar o nome trocando a letra A por O, ficando assim JUBO
B) O que faz a sintaxe dos três pontos antes do nome de um objeto?
        Permite copiar as variaveis de uma const e usa-la , sem que seja preciso digitar denovo.

 // PARTE 3 INTERPRETAÇÃO
 O que vai ser impresso no console?
        Sera retornado um booleano, e undefined
b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
        O booleano por ja esta definido na variavel backender ,e o undefined por nao ter definido a variavel altura na const pessoa.
*/

// ESCRITA DE CODIGO
const Nome = {
    meuNome : "Dickson",
    Apelido : ["Dick" ,  "Son" , "DK"],
}


const NovoObjeto = {
    ...Nome,
    Apelido : ["Paladino" , "Dim" , "Neto"]

}

function Entrada(objeto) {
    console.log (`Eu sou ${Nome.meuNome}, mas pode me chamar de ${NovoObjeto.Apelido[0]} , ${NovoObjeto.Apelido[1]} , ou ${NovoObjeto.Apelido[2]}`)
}
Entrada(NovoObjeto)

// PARTE 2
const pessoa1 = {
    nome : "Bruno",
    idade : 23,
    profissao : "Instrutor"
}
const pessoa2 = {...pessoa1 , nome : "Juba", idade : 25 , profissao : "Cantor" }

function imprimir(objeto) {
    console.log (pessoa1.nome , pessoa1.nome.length , pessoa1.idade , pessoa1.profissao , pessoa1.profissao.length)
    console.log (pessoa2.nome , pessoa2.nome.length , pessoa2.idade , pessoa2.profissao , pessoa2.profissao.length)

}
imprimir (pessoa1)

//PARTE 3
const carrinho = []

const Frutas1 = {
    nome: "Melancia",
    disponibilidade: true,
}

const fruta2 ={...Frutas1,nome : "UVA" }
const fruta3 = {...Frutas1, nome : "Goiaba"}

    carrinho.push(Frutas1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)

console.log (carrinho)