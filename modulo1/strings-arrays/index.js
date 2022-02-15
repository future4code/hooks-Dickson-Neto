/* INTERPRETAÇÃO DE CODIGO
1    array undefined , a
2   array null , b
3   tamanho da array 11 , c.
4   array nao definido
5   indice = 19 , e
6   indice do array + 6 , f

//2 PARTE
Todas as letras ficarao maiusculas, sera trocado a vogal A pela I, e mostrara o tamanho da frasww
ficando = SUBI NUM ONIBUS EM MIRROCOS - 27 LETRAS
*/


//ESCRITA CODIGO
const emailDoUsuario = prompt ("Qual seu email?")
const nomeDoUsuario = prompt ("Qual o seu nome?")
    console.log (`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a) ${nomeDoUsuario}`)

const comidaFavorita = ["Feijoada" , "Strogonoff" , "Creme de Galinha" ,  "Salpicao " , "Pizza" ]
console.log (`Essas sao minhas comidas favoritas
${comidaFavorita[0]}
${comidaFavorita[1]}
${comidaFavorita[2]}
${comidaFavorita[3]}
${comidaFavorita[4]}`)
const comidaUsuario = prompt("Qual sua comida favorita?")
comidaFavorita.splice(1,1)
comidaFavorita[1] = comidaUsuario
comidaFavorita.length -1

console.log (comidaFavorita)

// PARTE 3 
const listaDeTarefas = []
const atividade1 = prompt ("Atividades para realizar no dia 1/3")
const atividade2= prompt ("Atividades para realizar no dia 2/3")
const atividade3 = prompt ("Atividades para realizar no dia 3/3")
listaDeTarefas.push(atividade1)
listaDeTarefas.push(atividade2)
listaDeTarefas.push(atividade3)
console.log (listaDeTarefas)
const realizado = Number(prompt("Qual das 3 atividades voce ja realizou (em numeros) ?"))
const indice = realizado-1
listaDeTarefas.splice(indice,1)
console.log (listaDeTarefas)
