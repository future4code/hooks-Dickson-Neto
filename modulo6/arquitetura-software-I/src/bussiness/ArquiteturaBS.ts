import ArquiteturaDT from "../database/ArquiteturaDT";
import { UserModels } from "../models/User";
import { User } from "../services/types";



export class ArquiteturaBS{
    constructor(private arquiteturaDT : ArquiteturaDT){}
    async createUser(user : User): Promise<void>{
        const {name , email , password} = user

        if(!name || !email || !password){
            throw new Error("Faltam parametros a serem preenchidos")
        }
        if(email.indexOf("@") === -1){
            throw new Error("Invalid Email");
        }
        if(password.length < 6){
            throw new Error("Password must have at least 6 characters");
        }

        const newUser = new UserModels(name , email , password)
        const addUser = await this.arquiteturaDT.createUser(newUser)

        return addUser;
    }

    async getAllUser() :Promise<User[]>{
        const result = await this.arquiteturaDT.getAllUser()

        return result
    }

    async deleteUserById(idUser : string){
        const user = await this.arquiteturaDT.deleteUserById(idUser)

        if(!user){
            throw new Error("Usuario não encontrado")
        }
        return await this.arquiteturaDT.deleteUserById(idUser)

    }
}