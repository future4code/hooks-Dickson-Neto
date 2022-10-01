


export class LabProducts {
    private id? : string

    constructor(
        private name : string,
        private price : number,
        private image_url : string
    ){
        if(!this.id){
            this.id = this.id = String(Date.now()) as string
        }
    }

}