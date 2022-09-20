import {Request , Response} from 'express'
import { LabBussiness } from "../business/Lab.Bussiness";
import LabDatabase from '../database/Lab.Database';
import { StatusCodes } from 'http-status-codes';

const labBussiness = new LabBussiness(new LabDatabase())

export class LabController{
   
    async getUsers(req : Request , res: Response){
      
        try{
            const result = await labBussiness.getUser()
            res.status(StatusCodes.OK).send(result)
        }catch(error : any){
            res.send(error.message)
        }
    }

    async handleProducts(req:Request , res: Response){
        try{
            let order = req.query.order as string
            let sort = req.query.sort as string 
            if(!order){
                order = "%"
            }

            if(!sort){
                sort = order
            }
            const result = await labBussiness.handleProducts(order , sort)
            res.status(StatusCodes.OK).send(result)
        }catch(error : any){
            res.send(error.message)
        }
     

    }
    async createUser(req : Request , res: Response) : Promise <void>{
        try{
           
            const addUserList = {
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
            }

            await labBussiness.createUser(addUserList)
            res.status(StatusCodes.ACCEPTED).send(addUserList)

        }catch (error: any) {
            res
              .status(StatusCodes.NON_AUTHORITATIVE_INFORMATION)
              .send({ message: error.message || error.sqlMessage });
         
        }
    }

    async createProducts(req : Request , res: Response) : Promise<void>{
        try{
            const newProducts = {
                name : req.body.name,
                price : req.body.price,
                image_url: req.body.image_url
            }
            await labBussiness.createProducts(newProducts)
            res.status(StatusCodes.CREATED).send(newProducts)


        }catch (error: any) {
            res
            .status(StatusCodes.NON_AUTHORITATIVE_INFORMATION)
              .send({ message: error.message || error.sqlMessage });
         
        }
    }

    async addPurchases(req : Request , res: Response) : Promise<void>{
        try{
            
            const newPurchases = {
                user_id : req.body.user_id,
                product_id : req.body.product_id,
                quantity : req.body.quantity,
            }
           
           
            await labBussiness.addPurchases(newPurchases)
            res.status(StatusCodes.OK).send("Produto adicionado com sucesso.")
           
        }catch (error: any) {
            res
              .status(StatusCodes.NON_AUTHORITATIVE_INFORMATION)
              .send({ message: error.message || error.sqlMessage });
         
        }
    }

    async purchasesByUserId(req : Request , res: Response){
        try{
         const user_id =  req.params.user_id as string

         if(user_id){
            const result = await labBussiness.purchasesByUserId(user_id)
           res.status(StatusCodes.OK).send(result)
         }
        }catch (error : any){
            res.send(error.message)

        }
        
    }

}