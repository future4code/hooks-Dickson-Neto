import { Request, Response } from "express";
import { TesteBS } from "../business/TestesBS";
import { TestesDT } from "../database/TestesDT";
import { loginUserDTO, registrationUserDTO } from "../models/types";




const testesBS = new TesteBS(new TestesDT())

export class TestesCT {
    async registrationUser(req : Request ,  res : Response){
        try{
        const {email , password} = req.body

        const input : registrationUserDTO = {
            email,
            password
        }

        const token =  await testesBS.registrationUser(input)
        res.status(201).send({message : "Usuario Criado" , token})

        } catch (error: any) {
            res.status(400).send(error.message);
         }
    }

    async login(req : Request , res : Response) : Promise<void>{
        try{
           const {email , password} = req.body
           const input : loginUserDTO= {
            email,
            password
           }
            
           const result = await testesBS.login(input)
           res.send(result)
        } catch (error: any) {
            res.status(400).send(error.message);
         }
    }
}