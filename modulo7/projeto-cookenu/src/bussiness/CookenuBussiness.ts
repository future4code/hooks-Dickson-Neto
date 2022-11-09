
import { CookenuDT } from "../data/CokeenuDatabase";
import { beFriendsDTO, createRecipesDTO, loginUserDTO, signupUserDTO, timeLineDTO } from "../model/interfaces";
import moment from "moment";
import { addFriends, createRecipes, signupUser } from "../model/types";
import { Authentication } from "../services/Authentication";
import { IdGenerator } from "../services/idGenerator";

import {  InvalidEmail, invalidFields, InvalidPassword, InvalidToken, invalidUserEmail, RegisteredEmail, RequiredFiels } from "../error/CustomError";
import { EncryptPassword } from "../services/EncryptPassword";

const idGenerator = new IdGenerator() 
const authentication = new Authentication()
const cookenuDT = new CookenuDT()
const hash = new EncryptPassword()

export class CookenuBS{
    constructor(
        private cookenuDT : CookenuDT
        ){}

    async signupUser(input : signupUserDTO){
        try{
            const {name , email , password} = input

            if(!name || !email || !password){
                throw new RequiredFiels()
            }

            if(password.length < 6){
                throw new InvalidPassword()
            }

            if(!email.includes("@")){
                throw new InvalidEmail()
            }

            const isValidateEmail = await cookenuDT.getInformation(email)

            // if(email === isValidateEmail[0].email ){
            //     throw new invalidUserEmail()
            // }

            const id = idGenerator.generateId()
            const encrypt = await hash.hash(password)

            const signup : signupUser = {
                id : id,
                name,
                email,
                password : encrypt
            }

            await this.cookenuDT.signup(signup)

            const token = authentication.generateToken(id)
            return token

        }catch (error:any){
            throw new Error(error.message)
        }
    }
    
    async login(input : loginUserDTO){
        try{
            const {email , password} = input

            if(!email || !password){
                throw new RequiredFiels()
            }

          
            if(!email.includes("@")){
                throw new InvalidEmail()
            }
    
            const getInfo = await cookenuDT.getInformation(email)
            console.log(getInfo)
            const isValidadePassword = await hash.comparePassword(password , getInfo[0].password )

            if(email !== getInfo[0].email){
                throw new invalidFields()
            }
        
             if(!isValidadePassword){
                    throw new InvalidPassword()
                }
    
            const token = authentication.generateToken(getInfo[0].id)

            return token
        }catch (error: any) {
            throw new Error(error.message);
        }
    }
     
    async userProfile(input : any){
        try{
            const {token} = input

            const tokenTeste = authentication.tokenData(token)

            if(!tokenTeste){
                throw new InvalidToken()
            }

            const information = await cookenuDT.userDetails(tokenTeste.id)

            return information


        }catch(error : any){
            throw new Error(error.message);
        }
    }

    async informationUser (id : string , token : string) {
        try{
            if(!id){
                throw new RequiredFiels()
            }
            if(!token){
                throw new InvalidToken()
            }

            const getToken : any = authentication.tokenData(token)

            const result = this.cookenuDT.userDetails(id)
            
            return result
        }catch(error : any){
            throw new Error(error.message);
        }
    }


    //RECEITAS
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
            return result
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


    //FAZER AMIGOS

    async makeFriends(input : beFriendsDTO ){
        try{
            const {user , beFriend} = input

            if(!user){
                throw new InvalidToken()
            }

            if(!beFriend){
                throw new RequiredFiels()
            }

            const getToken : any = authentication.tokenData(user)

            const addFriend : addFriends = {
                user : getToken.id,
                be_friends : beFriend
            }
            console.log(addFriend)
            const result = await this.cookenuDT.makeFriends(addFriend)
            return result

        }catch(error : any){
            throw new Error(error.message);
        }
    }

    async dontFriend(input : beFriendsDTO){
        try{
            const {user , beFriend} = input

        if(!user){
            throw new InvalidToken()
        }
        if(!beFriend){
            throw new RequiredFiels()
        }

        const getToken : any = authentication.tokenData(user)
       
        const userId : string = getToken.id as string
       

        const result = await this.cookenuDT.removeFriends(userId ,  beFriend)

        return result
        }catch(error : any){
            throw new Error(error.message);
        }
        
    }
}