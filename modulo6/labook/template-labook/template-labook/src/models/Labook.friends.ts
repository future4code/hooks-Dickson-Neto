
import { v4 } from "uuid"
import { POST_TYPES } from "../services/types"

const generateId = (): string => v4()
export class LabookFriends{
    private id? : string
    constructor(
       private user_id: string,
       private friends_id: string,
       
    ){
        if(!this.id){
            this.id = this.id = generateId()
        }
    }
}