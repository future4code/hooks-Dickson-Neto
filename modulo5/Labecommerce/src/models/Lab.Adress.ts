

export class LabAdress { 
    private id? :  string

    constructor(
        private users_id : string,
        private adress : string

    ){

        if(!this.id){
            this.id = this.id = String(Date.now()) as string
        }
    }
}