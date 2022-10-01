import { Database } from "../migrations/connection";
import { ExRepository } from "../models/exRepository";
import { Users } from "../services/types";


const ex_table = "aula48_exercicio"

export default class ExDatabase extends Database implements ExRepository{
    public async getUser() : Promise<Users[]> {
        const result = await Database.connection(ex_table).select("*").orderBy("id" , "desc")

        return result.flat(1)
    }

    public async filterUser(name : string)  : Promise<Users[]>{
        const result = await Database.connection(ex_table).select("*").where({name : name})

     
        return result;
    }

    public async typeUser(type : string) : Promise <Users[]>{
        const result = await Database.connection(ex_table).select("*").where({type : type})

        return result
    }

}   