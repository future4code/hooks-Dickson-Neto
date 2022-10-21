
import { v4 } from "uuid"
import { POST_TYPES } from "../services/types"

const generateId = (): string => v4()
export class LabookPost{
    private id? : string
    constructor(
       private photo: string,
       private description: string,
        private type: POST_TYPES,
       private author_id: string
    ){
        if(!this.id){
            this.id = this.id = generateId()
        }

        if(!this.type){
            this.type = this.type = POST_TYPES.NORMAL
        }
    }
}