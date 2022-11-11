import { createRecipesDTO } from "../model/interfaces";
import { Request , Response } from "express";
import {RecipesBS} from '../bussiness/RecipesBusiness'
import { CookenuDT } from "../data/CokeenuDatabase";



const recipesBS = new RecipesBS( new CookenuDT())

export class RecipesCT{
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

            await recipesBS.createRecipes(input , token)
            res.send({message : "Receita criada com sucesso" , "Receita" : input})

        }catch(error : any){
            res.send(error.message)
        }
    }
    
    async informationRecipes(req : Request , res : Response) {
        try{
            const id = req.params.id as string
            const token = req.headers.authorization as string

            const result = await recipesBS.informationRecipes(id , token)

            res.send(result)

        }catch(error : any){
            res.send(error.message)
        }
    }
}