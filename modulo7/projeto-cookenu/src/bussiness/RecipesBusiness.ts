import moment from "moment"
import { CookenuDT } from "../data/CokeenuDatabase"
import { InvalidToken, RequiredFiels } from "../error/CustomError"
import { createRecipesDTO } from "../model/interfaces"
import { createRecipes } from "../model/types"
import { Authentication } from "../services/Authentication"
import { IdGenerator } from "../services/idGenerator"


const idGenerator = new IdGenerator() 
const authentication = new Authentication()
const cookenuDT = new CookenuDT()

export class RecipesBS {
    constructor(  private cookenuDT : CookenuDT){}
    async createRecipes(input : createRecipesDTO , token : string){
        try{
            const {title , description , preparationMode , creationAt} = input

            if(!token){
                throw new InvalidToken()
            }
            if(!title || !description || !preparationMode){
                throw new RequiredFiels()
            }

            const id = idGenerator.generateId()
            
            //VARIAVEL PARA VERIFICAR SE O TOKEN É VALIDO E BUSCAR O ID DO USUARIO
            
            const getToken : any = authentication.tokenData(token)

            //CONVERSÃO DO MODELO DA DATA PARA SALVAR NO BANCO DE DADOS
            const creationData = moment(creationAt , `DD/MM/YYYY`).format(`YYYY-MM-DD`)

            const recipes : createRecipes = {
                id,
                title,
                description,
                preparation_mode : preparationMode,
                creation_At: creationData,
                user_id : getToken.id
            }
            const result = this.cookenuDT.createRecipes(recipes)
            return recipes
        }catch(error : any){
            throw new Error(error.message);
        }
    }

    async informationRecipes (id : string , token : string) {
        try{

            if(!id){
                throw new RequiredFiels()
            }
            if(!token){
                throw new InvalidToken()
            }

            const getToken : any = authentication.tokenData(token)
            
            const result = this.cookenuDT.informationRecipes(id)
            
            return result
        }catch(error : any){
            throw new Error(error.message);
        }
    }
}