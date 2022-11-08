import { Database } from "../connection/connection";
import { signupUser } from "../model/types";

const TABLE_USER = " cookenu_user "
export class CookenuDT extends Database{
    public async signup(signup : signupUser){
        return Database.connection(TABLE_USER).insert(signup)
    }

    public async getInformation(){
        const result  = Database.connection(TABLE_USER).select("*")
        return result
    }
}