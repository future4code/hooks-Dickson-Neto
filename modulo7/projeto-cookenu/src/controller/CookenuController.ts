import { Request, Response } from "express";
import { CookenuBS } from "../bussiness/CookenuBussiness";
import { CookenuDT } from "../data/CokeenuDatabase";
import { loginUserDTO, signupUserDTO } from "../model/interfaces";


const cookenuBS = new CookenuBS( new CookenuDT())
export class CokeenuCT {
    async signup(req : Request , res : Response) : Promise<void>{
        try{
            const input : signupUserDTO = {
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
            }
    
            const token = await cookenuBS.signupUser(input)
            res.send({message : "Usuario criado com sucesso" , token})
        }catch(error : any){
            res.send(error.message)
        }
    }

    async login (req : Request , res : Response){
        try{
            const input : loginUserDTO = {
                email : req.body.email,
                password : req.body.password
            }

            const result = await cookenuBS.login(input)
            res.send(result)
        }catch(error : any){
            res.send(error.message)
        }
    }

    async userInformation(req : Request , res : Response){
        try{
            const input = {
                token : req.headers.authorization as string
            }

            const result = await cookenuBS.userInformation(input)
            res.send(result)

        }catch(error : any){
            res.send(error.message)
        }
    }

}