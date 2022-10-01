import knex, { Knex } from "knex"




export class LabPurchases{

    private id? : string
    constructor(
        private user_id : string,
        private product_id : string,
        private quantity : number,
        private total_price : number
   
    ){
        if(!this.id){
            this.id = this.id = String(Date.now()) as string
        }   
        // if(!this.total_price ){
        //     this.total_price = this.total_price = quantity
        // }
    }
    public getUser_id(){
        return this.user_id
    }
}