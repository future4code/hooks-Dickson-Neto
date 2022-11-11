import { loginUserDTO, signupUserDTO } from "../model/interfaces"
import { Request , Response } from "express"
import { UserBS } from "../bussiness/UserBusiness"
import { CookenuDT } from "../data/CokeenuDatabase"

const userBS = new UserBS( new CookenuDT())


export class UserCT{
    async signup(req : Request , res : Response) : Promise<void>{
        try{
            const input : signupUserDTO = {
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
            }
    
            const token = await userBS.signupUser(input)
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

            const result = await userBS.login(input)
            res.send(result)
        }catch(error : any){
            res.send(error.message)
        }
    }

    async userProfile(req : Request , res : Response){
        try{
            const input = {
                token : req.headers.authorization as string
            }

            const result = await userBS.userProfile(input)
            res.send(result)

        }catch(error : any){
            res.send(error.message)
        }
    }

    async informationUser(req : Request , res : Response) {
        try{
            const id = req.params.id as string
            const token = req.headers.authorization as string

            const result = await userBS.informationUser(id , token)

            res.send(result)

        }catch(error : any){
            res.send(error.message)
        }
    }
}