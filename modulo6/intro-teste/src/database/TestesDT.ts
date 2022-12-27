import { Database } from "../connection";
import { user } from "../models/types";


const TABLE_REGISTRATION = " registrationUser"
export class TestesDT extends Database{
    public async registrationUser(user : user){
        return await Database.connection(TABLE_REGISTRATION).insert(user)
    }

    public async getUserByEmail(email : string){
        const result = Database.connection(TABLE_REGISTRATION).select("*").where({email})
        return result
    }
}