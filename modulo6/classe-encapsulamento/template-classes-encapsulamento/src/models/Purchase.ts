

// type para tipar no banco de dados com snake_case
export class PurchaseDB {
    private id?: string
    constructor(
        private user_id: string,
        private product_id: string,
        private quantity: number,
        private total_price: number
    ){
        if(!this.id){
            this.id = this.id = String(Date.now())
        }
    }
}

// type para tipar no typescript com camelCase
export class Purchase {
    private id?: string
    constructor(
       private userId: string,
       private productId: string,
       private quantity: number,
       private totalPrice: number
    ){
        if(!this.id){
            this.id = this.id = String(Date.now())
        }
    }
}