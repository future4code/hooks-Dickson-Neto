import { SelectionRange } from "typescript"

//VERIFICAÇÃO DE DATAS
const data = new Date();
const day = String(data.getDate());
const month = String(data.getMonth() + 1).padStart(2, "0");
export const year = data.getFullYear();
export const today = day + "/" + month + "/" + year;

//TIPAGEM DOS USUARIOS DO BANCO
export type Users = {
    name: string,
    CPF : string,
    birthDate : string,
    balance : number,
    bankStatemente : Transaction[]
}

//AQUI IREI FAZER AS TRANSAÇOES PEDIDAS
export type Transaction = {
        date : string,
        amount : number,
        description : string,
    }

//DADOS DOS USUARIOS PARA O BANCO
export let usersBank : Users[] = [
   {
    name : "Karl Josefsen",
    CPF : "97136590078",
    birthDate : "26/12/1994",
    balance : 0,
    bankStatemente : []
   },

   {
    name : "Mary Gocher",
    CPF : "28004499007",
    birthDate : "19/01/1984",
    balance : 0,
    bankStatemente : []
   },   
   {
    name : "Ruan Carlos",
    CPF : "11111111123",
    birthDate : "11/02/1999",
    balance : 0,
    bankStatemente : []
   },
]