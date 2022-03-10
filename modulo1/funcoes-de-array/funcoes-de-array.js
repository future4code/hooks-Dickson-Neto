//INTERPRETAÇÃO DO CODIGO
// 1- a) O que vai ser impresso no console?
//     Sera impresso o Nome, o apelido e o array inteiro dos 3 usuarios

// 2-a)O que vai ser impresso no console?
//     Um array contendo o nome dos 3 usuarios

// 3-a)a) O que vai ser impresso no console?
//     sera impresso o Nome , o apelido e o array completo de duas da usuarias, sendo tirada a Chijo

//ESCRITA DE CODIGO

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
 //]

 
//a) Crie um novo array que contenha apenas o nome dos doguinhos

//  const nomeDosDogs = pets.map((item , index , array)=>{
//      return item.nome
//  })

//B)Crie um novo array apenas com os cachorros salsicha

//  const raçaDogs = pets.filter((item,index,array)=>{
//      return item.raca === "Salsicha"
//  })


//C) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

//  const descontoPoodle = pets.filter((item,index,array)=>{
//     if(item.raca === "Poodle"){
//        console.log (`Voce recedbu 10% de desconto para tosar ${item.nome}`)
//     }else{}
    
    
//  })
//  console.log(nomeDosDogs)
//  console.log(raçaDogs)


//2 PARTE
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
 
//  a) Crie um novo array que contenha apenas o nome de cada item
    
//     const nomeProdutos = produtos.map((item,index,array)=>{
//      return item.nome
//  })
 
//  b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
//     const novosPreços = produtos.map((item,index,array)=>{
//     return {nome : item.nome, preço: (item.preco) * 0.95}
//  })

//  c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
//     const acharBebidas = produtos.filter((item,index,array)=>{
//      return item.categoria === "Bebidas"
//  })

//  d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
//    const acharYpe = produtos.filter((item,index,array)=>{
//        return item.nome.includes("Ypê")
//    })

  // e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
//    const retornarMensagem = acharYpe.map((item,index,array)=>{
//    console.log (`Compre ${item.nome} por ${item.preco}`)
//    })

//  console.log(nomeProdutos)
//  console.log (novosPreços)
 

 //DESAFIO
//  const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]

// //a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

// const ordemNomes = pokemons.map((item,index,array)=>{
//     return item.nome
// })

// console.log(ordemNomes.sort())

// //Crie um novo array apenas com os tipos dos pokémons, sem repetição

// const ordemTipo = pokemons.map((item,index,array)=>{
//     console.log (item.tipo)
// })
