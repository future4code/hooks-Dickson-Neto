import knex, { Knex } from "knex"
import { Database } from "../migrations/connection"
import { LabProducts } from "./LabProducts"




export class LabPurchases{
    
    private id? : string
    private total_price? : number
    constructor(
        private user_id : string,
        private product_id : string,
        private quantity : number,
   
    ){
        if(!this.id){
            this.id = this.id = String(Date.now()) as string
        }   
        if(!this.total_price ){
            this.total_price = this.total_price = quantity
        }
    }
}