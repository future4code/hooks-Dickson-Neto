import ExDatabase from "../database/database";
import { Users } from "../services/types";





export class ExBussiness { 
    constructor(private exDatabase : ExDatabase){}

    async getUser() : Promise<Users[]>{
        const result = await this.exDatabase.getUser()

        return result;
    }

    async filterUser(name : string )  : Promise<Users[]>{
        const result = await this.exDatabase.filterUser(name);

        if (!result.length) {
            throw new Error("Usuario não encontrado");
          }
        return result
    }
    
    async typeUser(type : string) : Promise<Users[]> {
        const result = await this.exDatabase.typeUser(type)

        if (!result) {
            throw new Error("Usuario não encontrado");
        }

        return result
    }

}