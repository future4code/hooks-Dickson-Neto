import express , {Express , query, Request , response, Response}  from "express";
import cors from 'cors';
import { usersBank, Users, Transaction , today , year } from "./data";

const app : Express = express()

app.use(express.json())
app.use(cors())

//PEGAR TODOS OS USUARIOS DO BANCO
app.get("/users" , (req :Request, res:Response ) =>{
    res.send(usersBank)
})

//CRIAR NOVO USUARIO
app.post("/createUsers" ,  (req :Request, res:Response ) =>{
    const {name , CPF , birthDate } = req.body
    const yearBirth = birthDate.split("/")

    let idade : Number = year  - yearBirth[2] 
try{
    if(idade < 18){
        throw new Error ("Você deve ter no minimo 18 anos para criar uma conta")
    }else {
        const newUsers : Users  = {
            name,
            CPF,
            birthDate,
            balance : 0,
            bankStatemente : [],
        }

        usersBank.push(newUsers)
    }
res.send("Usuario Criado com sucesso")
}catch (error){
    res.send(error.message)
}


})
//PEGAR SALDO DA CONTA 
app.get("/users/balance" , (req :Request, res:Response) =>{
   const cpf = req.headers.cpf
    if(!cpf){
        throw new Error ("CPF não condiz com nenhuma conta cadastrada!!")   
    }
    try{
        const index = usersBank.findIndex(client => client.CPF === cpf)
        res.send(`${usersBank[index].name}, seu saldo é:R$ ${usersBank[index].balance} `)
    }catch (error : any){
       res.send(error.message)
    }
}) 

//ADICIONANDO SALDO A UMA CONTA 
app.post("/myAccount" , (req : Request , res : Response) =>{
    const {name , cpf , cash } = req.body
    if(!name || !cpf || !cash){
        throw new Error ("Faltam informações para o deposito")
    }
    const index = usersBank.findIndex(client => client.name === name && client.CPF === cpf)
    
    try{
        if(index != -1){
            usersBank[index].balance = usersBank[index].balance + cash
            const newDeposit = {
                date : today,
                amount : cash,
                description : "Saldo adicionado com sucesso"
            }
            usersBank[index].bankStatemente.push(newDeposit)
            res.send(`${usersBank[index].name} depositou ${cash}. Seu saldo atual é ${usersBank[index].balance}`)
        }
    }catch {
        throw new Error ("Algo esta errado, ligue para o seu gerente!")
    }
})

//PAGANDO UMA CONTA COM O VALOR DA CONTA
app.put("/myAccount/pay" , (req : Request , res : Response) =>{
    const {cpf} = req.headers
    const {payment_date , description , cash} = req.body

    const index = usersBank.findIndex(client => client.CPF === cpf)
    const valorTotal = usersBank[index].balance - cash
     try{
        if(index ) {
            if(payment_date){
                const newBill : Transaction = {
                    date : payment_date ,
                    description,
                    amount : valorTotal
                }
                //VERFICAÇÃO PARA NÃO DEIXAR PAGAR A CONTA SEM TER O VALOR DEPOSITADO
            if(valorTotal < 0){
                res.send("Valor insuficiente")

            }else{
                usersBank[index].bankStatemente.push(newBill)
                res.send(`Pagamento realizado com sucesso. ${usersBank[index].name} ,  seu saldo atual é ${valorTotal}`)
            }
                    
            }else{
                //CASO NÃO PASSE A DATA NO BODY, ELE RECONHECERA A DATA ATUAL PARA O PAGAMENTO DA CONTA
                const newBill : Transaction = {
                    date : today,
                    description,
                    amount : cash
                }
                usersBank[index].balance =  usersBank[index].balance - cash
                usersBank[index].bankStatemente.push(newBill)
            }
            //ESSAS VERIFICAÇOES DE ERRO NAO ESTÃO  FUNCIONANDO!!
        }else{
            throw new Error ("Verifique suas informações")
        }
    }catch (error){
        throw new Error ("Verifique suas informações")
    }
   
})


app.post("/myAccount/internalTransfer" , (req : Request , res: Response) =>{
   const {nameR , cpfR} = req.headers.entries
    
    // const index = usersBank.findIndex(client => client.name === nameR)
    console.log(nameR , cpfR)
    // if(){
  
    // }else{
    //     throw new Error ("Algum parametro foi passado errado")
    // }
})
app.listen("3003" , () =>{
    console.log('O servidor esta online na porta 3003')
})
