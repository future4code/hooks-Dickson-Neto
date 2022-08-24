import express , {  Express , Request , Response } from "express";
import cors from 'cors'
import { v4 as idProduct } from "uuid";
import {StatusCodes} from 'http-status-codes';
import { Cafes , Products } from "./data";
import { uuid } from "uuidv4";

const app = express()
app.use(express.json())
app.use(cors())

app.get("/test" , (req:Request , res: Response) =>{
    res.status(StatusCodes.OK).send("Testandoo")
})

app.post("/created" , (req:Request , res:Response) =>{
   const  {name , price} = req.body
   try{
    if(!name  && !price ){
        throw new Error ("Complete todos os dados para adicionar o produto")
    }
    if(typeof name !== "string" || typeof price !== "number"){
        throw new Error ("Os parametros estão no type errado")
    }
    if(price <= 0){
        throw new Error("O valor especificado não pode ser usado")
    }


    const newProduct : Products = {
        id: idProduct(),
        name,
        price,
    }

    Cafes.push(newProduct)
    res.send(Cafes)
   }catch(error){
    res.status(StatusCodes.BAD_REQUEST).send(error.message)
   }
  
})
// RETORNA TODOS OS PRODUTOS
app.get("/products" , (req:Request , res:Response) =>{
res.status(StatusCodes.OK).send(Cafes)
})
//ALtERA O PREÇO DE UM DETERMINADO PRODUTO PELO ID
app.put("/products/:uuId" , (req:Request , res:Response)=>{
    const uuId = req.params.uuId
    const newPrice = req.body.newPrice
    try{
        const trueOrFalse = Cafes.find(item => item.id === uuId)
        if(!trueOrFalse) throw new Error ("Produto não encontrado")

        if(typeof newPrice !== "number"){
            throw new Error ("Os parametros estão no type errado")
        }
        if(newPrice <= 0){
            throw new Error("O valor especificado não pode ser usado")
        }
        if(trueOrFalse){
            trueOrFalse.price = newPrice
        }
        res.send(Cafes)
    }catch (error) {
        res.status(StatusCodes.BAD_REQUEST).send(error.message)
    }
   

  
})
//DELETA PRODUTOS
app.delete("/products/:uuId" , (req : Request , res:Response) =>{
    const uuId = req.params.uuId
    let coffe = Cafes
    try{
        if(!uuid){
            res.send("Produto não encontrado")
        }
     const delCoffe : any= Cafes.filter((item)=>{
        return item.id !== uuId
     })
   
    res.send(delCoffe)
    }catch (error){
        res.status(StatusCodes.NON_AUTHORITATIVE_INFORMATION).send(error.message)
    }
   
})
app.listen(3003 , () =>{
    console.log("O servidor esta online na porta 3003")
})
