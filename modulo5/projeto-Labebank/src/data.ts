import { SelectionRange } from "typescript"

//VERIFICAÇÃO DE DATAS
const data = new Date();
const day = String(data.getDate());
const month = String(data.getMonth() + 1).padStart(2, "0");
export const year = data.getFullYear();
export const today = day + "/" + month + "/" + year;

export enum DEAL {
    DEBITO = "Pagamento de conta",
    DEPOSITO = "Deposito",
    TRANFER_SAIDA = "Transferencia de dinheiro",
    TRANSFER_ENTRADA = "Recebimento de dinheiro",
}
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
    balance : 10000,
    bankStatemente : [
        {
            date : "11/02/2022",
            amount : 5000,
            description : DEAL.DEBITO,
        },
        
        {
            date : "20/06/2022",
            amount : 2000,
            description : DEAL.DEPOSITO,
        }
    ]
   },

   {
    name : "Mary Gocher",
    CPF : "28004499007",
    birthDate : "19/01/1984",
    balance : 10000,
    bankStatemente : [
        {
            date : "22/08/2022",
            amount : 2000,
            description : DEAL.TRANFER_SAIDA,
        },

        {
            date : "20/07/2022",
            amount : 2000,
            description : DEAL.DEPOSITO,
        }
    ]
   },   
   {
    name : "Ruan Carlos",
    CPF : "11111111123",
    birthDate : "11/02/1999",
    balance : 5000,
    bankStatemente : [
        {
        date : "22/08/2022",
        amount : 2000,
        description : DEAL.TRANSFER_ENTRADA,
         },

         {
         date : "22/08/2022",
         amount : 1500,
        description : DEAL.DEBITO,
        }
]
   },
]