
import { v4 } from "uuid"

const generateId = (): string => v4()
export class LabookUser{
    private id? : string
    constructor(
        private name : string,
        private email : string,
        private password : string
    ){
        if(!this.id){
            this.id = this.id = generateId()
        }
    }
}