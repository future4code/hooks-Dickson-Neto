
import {Request , Response} from 'express'
import { ExBussiness } from "../business/bussiness";
import ExDatabase from "../database/database";
import { Users } from '../services/types';


const exBussiness = new ExBussiness(new ExDatabase())

export class ExController{
    async getUsers(req : Request , res: Response){
        try{

            const result = await exBussiness.getUser()
            res.send(result)
        }catch(error : any){
            res.send(error.message)
        }
    }

    async filterUser(req : Request , res : Response) : Promise<void>{

        try{
            let name = req.query.name as string
           
            if(!name){
                throw new Error ("Usuario não encontrado")
            }
    
            const result = await exBussiness.filterUser(name)
            res.send(result)
        }catch (error: any) {
        res.send(error.message)
    }

    }
    async typeUser(req : Request , res : Response) {

        try{
            const type = req.query.type as string 

            if(!type){
                throw new Error ("Usuario não encontrado")
            }
            const resultType = await exBussiness.typeUser(type)
            res.send(resultType)
        }catch (error: any) {
        res.send(error.message)
    }
    }
}