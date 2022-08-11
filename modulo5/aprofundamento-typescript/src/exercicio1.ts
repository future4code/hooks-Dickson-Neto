

const minhaString : string = "12"
//Ao tipar  string, a variavel nao aceita valores numericos
const meuNumero : number = 2
//Ao tipar number, a variavel nao aceita valores em string

enum CoresArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    VIOLETA = "violeta"
}
type User = {
    nome : string,
    idade: number,
    corFavorita: CoresArcoIris
}

const detailsUser: User = {
    nome : "Dickson",
    idade : 23,
    corFavorita : CoresArcoIris.AZUL,
}
const detailsUser1 = {
    nome : "Otavio",
    idade : 17,
    corFavorita : CoresArcoIris.LARANJA,
}
const detailsUser2 = {
    nome : "Vivian",
    idade : 25,
    corFavorita : CoresArcoIris.VIOLETA,
}

console.log(detailsUser , detailsUser1 , detailsUser2)