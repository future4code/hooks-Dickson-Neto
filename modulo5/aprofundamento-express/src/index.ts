import express , {Request , Response } from 'express'
import cors from 'cors'
import { arrFilmes } from './data'
import  {  v4  as  idFilms  }  from  "uuid" 

const app = express()
app.use(express.json())
app.use(cors())


app.get("/ping" , (req : Request , res : Response) =>{
    res.send("Pong! 🏓")
})

app.get('/listFilms/fil' , (req : Request , res : Response)=>{
    res.send(arrFilmes)
})
//RETORNANDO DO ARRAY OS FILMES QUE JA FORAM ASSISTIDOS - EXERCICIO 4
app.get("/listFilms" , (req : Request , res : Response) =>{
    const filmes = arrFilmes.filter((completed)=>{
       if(completed.done === true){
        return(completed)
       }
       
    })
    res.send(filmes)
   
})
//ADICIONAR UM NOVO FILME A LISTA
app.post("/listFilms/add" , (req : Request , res : Response) =>{
   
   
    const { userName , name } = req.body
    const films = arrFilmes.find(filme => filme.name === name)
    if(films) throw new Error ("Filme ja adicionado a lista")
    const newFilms = {
        userName,
        id: idFilms(),
        name,
        done : false
    }
   
    
    arrFilmes.push(newFilms)
    res.send(arrFilmes)
})

// ALTERAR CONCLUIDO PARA TRUE OR FALSE
app.put("/listFilms/:Id" , (req : Request , res : Response)=>{
    const id = req.params.Id
    const trueOrFalse = arrFilmes.find(item => item.id === id)
    if(!trueOrFalse) throw new Error ("Usuario não encontrado")
    if(trueOrFalse.done === true){
        trueOrFalse.done = false
    }else{
        trueOrFalse.done = true
    }

    res.send(trueOrFalse)
  
   


})

//DELETAR UM FILME DA LISTA
app.delete("/listFilms/:idLista" , (req : Request , res : Response) =>{
    const idLista = req.params.idLista
    let newList = arrFilmes
    const delFilms = arrFilmes.filter((ucfil)=>{
        return ucfil.id !== idLista
    })
   newList = delFilms
   res.send("Lista deletada com Sucesso")
})

//RETORNAR LISTA DE UM USUARIO
app.get("/listFilms/search" , (req : Request , res : Response) =>{
    const userList = req.query.name
        if (!userList) throw new Error("É necessário passar o nome do Usuario")

        const newList = arrFilmes.find(user => user.name.toLocaleLowerCase() === (userList as string).toLowerCase())
        res.send(arrFilmes)
})
app.listen(3003 , ()=>{
    console.log( "O servidor esta online na porta 3003")
})