import { Request, Response } from "express";
import { CookenuBS } from "../bussiness/CookenuBussiness";
import { CookenuDT } from "../data/CokeenuDatabase";
import { beFriendsDTO, createRecipesDTO, loginUserDTO, signupUserDTO, timeLineDTO } from "../model/interfaces";



const cookenuBS = new CookenuBS( new CookenuDT())
export class CokeenuCT {

    //USUARIO 
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

    async userProfile(req : Request , res : Response){
        try{
            const input = {
                token : req.headers.authorization as string
            }

            const result = await cookenuBS.userProfile(input)
            res.send(result)

        }catch(error : any){
            res.send(error.message)
        }
    }

    async informationUser(req : Request , res : Response) {
        try{
            const id = req.params.id as string
            const token = req.headers.authorization as string

            const result = await cookenuBS.informationUser(id , token)

            res.send(result)

        }catch(error : any){
            res.send(error.message)
        }
    }


    //RECEITAS
    async createRecipes(req : Request , res : Response){
        try{
            const data = new Date()
            const today = data.toLocaleDateString()

            const token = req. headers.authorization as string

            const input : createRecipesDTO = {
                title : req.body.title,
                description : req.body.description,
                preparationMode : req.body.preparationMode,
                creationAt : today,
            }

            await cookenuBS.createRecipes(input , token)
            res.send({message : "Receita criada com sucesso" , "Receita" : input})

        }catch(error : any){
            res.send(error.message)
        }
    }
    
    async informationRecipes(req : Request , res : Response) {
        try{
            const id = req.params.id as string
            const token = req.headers.authorization as string

            const result = await cookenuBS.informationRecipes(id , token)

            res.send(result)

        }catch(error : any){
            res.send(error.message)
        }
    }

    //FAZER AMIGOS

    async makeFriends(req : Request , res : Response){
        try{
           const input : beFriendsDTO = {
                user : req.headers.authorization  as string,
                beFriend : req.body.beFriend,
           } 

           const result = await cookenuBS.makeFriends(input)

           res.send({message : "Amizade feita com sucesso"})


        }catch(error : any){
            res.send(error.message)
        }
    }

    async dontFriend (req : Request , res : Response){
        try{
            const input : beFriendsDTO = {
                user : req.headers.authorization  as string,
                beFriend : req.body.beFriend,
            }

            const result = await cookenuBS.dontFriend(input)

            res.send({message: "Unfollowed successfully"})


        }catch(error : any){
            res.send(error.message)
        }
    }
}