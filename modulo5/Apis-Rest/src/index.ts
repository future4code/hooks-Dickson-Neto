import express , { Request , Response } from "express";
import cors from 'cors'
import { TYPE, User, consumer } from "./data";



const app = express()
app.use(express.json())
app.use(cors())

//1
//Usaria o metodo get e a entidade o /users
app.get("/users" , (req : Request , res: Response) =>{
    res.send(consumer)
})

app.get("/users/:tipo" , ( req :Request , res:Response) =>{
    //Passei o parametro por query
    //Validação para não passar se for um tipo de usuario inexistente
    const tipo : string  = req.params.tipo as string
    if(!tipo){
        res.send("Faltam parametros")
    } 
    try{
    const getType : User[] | undefined = consumer.filter((item)=>{
        return(item.type === tipo)
    })

    if(!getType) {
        res.send("Tipo de usuario não encontrado")
    }

    res.send(getType)
}catch (error : any){
    res.send(error.message)
}

})


//Exercicio 3

app.get("/user" , (req : Request , res: Response) =>{
    //normalmente usado o query params
   try{
    const name : string = req.query.name as string

    const searchName: User | undefined = consumer.find(item => item.name === name)
    //Mensagem de erro caso nao encontre nenhum usuario
    if(!searchName){
        throw new Error ("Nome de usuario nao encontrado")
    }
    res.send(searchName)
   }catch(error : any){
    res.send(error.message)

   } 



})
   
//Exercicio 4
app.post("/user/create" , (req:Request , res:Response) =>{
    //A mudança para PUT não ha diferença, ainda sim, ha adição do novo cliente
    //o PUT é mais apropriado para mudança de dados
try{
    const {id , name , email , type , age} :User = req.body
    

    if(!id ||!name || !email || !type || !age){
        throw new Error("Faltam Parametros")
    
    }
    const newConsumer = {
        id,
        name,
        email,
        type,
        age,
    }
    if(!consumer){
        throw new Error("Faltam Parametros")
    }

    consumer.push(newConsumer)
    res.send(consumer)
  
} catch (error: any){
    res.send(error.message)
}
})

app.put('/user/altered' , (req:Request , res:Response) =>{
try{
    const name : string = req.body.name as string
   
    const arr = consumer[consumer.length-1]

   
    if(!name){
        throw new Error("É necessario informar o nome")
    }

   if(arr){
    arr.name = `${name} ${arr.name} `
   }
    res.send(arr)
    // res.send(consumer)


}catch (error : any){
    res.send(error.message)
}
})

app.patch('/user/altered' , (req:Request , res:Response) =>{
    try{
        const name : string = req.body.name as string
        const arr = consumer[consumer.length -1]
        if(!name){
            throw new Error("É necessario informar o nome")
        }
    
        for( let alterar of consumer){
            if(arr){
                alterar.name = `${alterar.name} ${name}`
            }
        }
        res.send(arr)
        // res.send(consumer)
    
    
    }catch (error : any){
        res.send(error.message)
    }
    })


app.delete("/user/delete/:Id" , (req:Request , res:Response) =>{
    const id= Number(req.params.Id)

    const delUser  = consumer.findIndex(item => item.id === id)
    console.log(delUser)
    consumer.splice(delUser , 1)
    res.send(consumer)
})

app.listen("3003" , () =>{
    console.log("O servidor esta online")
})