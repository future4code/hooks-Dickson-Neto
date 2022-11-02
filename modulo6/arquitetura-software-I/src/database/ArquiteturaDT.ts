import { Database } from "../connection/connection";
import { UserModels } from "../models/User";
import { User } from "../services/types";

const TABLE = "User_Arq"
export default class ArquiteturaDT extends Database{
    public async createUser(user : UserModels):Promise<void>{
        return await Database.connection(TABLE).insert(user)
    }
    public async getAllUser() :Promise<User[]> {
        const result = await Database.connection(TABLE).select()

        return result.flat(1)
    }

    public async deleteUserById(idUser : string){
    return  await Database.connection(TABLE).delete().where({id : idUser})

     
    }
}