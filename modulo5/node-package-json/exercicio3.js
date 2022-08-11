//Lista de Tarefas
const listaTarefas = process.argv[2]
let listaAtual = ["Lavar Roupa"]
const newList = listaAtual.push(process.argv[2])
const blue = `\u001b[0;34m`
// Adicionar Tarefas


switch (listaTarefas) {
  case "lista":
    console.log(`${blue} ${listaAtual}`);
    break;
  case "addLista":
    console.log("Atividade Adicionada com Sucesso");
    console.log(listaAtual)
    break;
  default:
    console.log("não entrou em nenhuma condição");
    break;
}
/* 
if(process.argv[2]){
    console.log("Tarefas adicionada com sucesso" ) 
    console.log(listaTarefas)
   
} else{
    console.log(listaTarefas)
} */