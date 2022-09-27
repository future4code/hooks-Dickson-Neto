
export class User{
    private id ? :string
    constructor(
        
        private email: string,
        private password: string,
    ){
        if(!this.id){
            this.id = this.id = String(Date.now())
        }
    }
}