
export class Product{
    private id?: string
    constructor(
        private name: string,
        private price: number
    ){
        if(!this.id){
            this.id = this.id = String(Date.now())
        }
    }
}